import classNames from 'classnames';
import {FC, memo, useEffect, useMemo, useRef, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {isApple, isMobile} from '../../config';
import {SectionId, blog} from '../../data/data';
import useWindow from '../../hooks/useWindow';
import Section from '../Layout/Section';

import dynamic from 'next/dynamic';

const Tilt = dynamic(() => import('react-parallax-tilt'), {ssr: false});

const Blog: FC = memo(() => {
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {width} = useWindow();

  const {imageSrc, blogs} = blog;

  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  return (
    <Section noPadding sectionId={SectionId.Blog}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          {'bg-neutral-700': !imageSrc},
        )}
        style={imageSrc ? {backgroundImage: `url(${resolveSrc})`} : undefined}>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <Link href={blogs[0].href}>
              <div className="block relative">
                <Image
                  alt="Blog Screenshot"
                  className="object-cover w-full h-full"
                  height={600}
                  src={blogs[0].screenshot}
                  width={800}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg px-4">
                  <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2 text-center">{blogs[0].name}</h2>
                  <p className="text-white text-base sm:text-lg text-center">{blogs[0].description}</p>
                  <div className="relative w-full md:w-1/2 p-4 flex items-center">
                    <div className="inline-block px-6 py-3 bg-orange-500 text-white text-xl font-semibold rounded-md transition duration-300">
                      Visit My Blog
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default Blog;
