import clsx from 'clsx';
import * as React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { InView } from 'react-intersection-observer';
import { useIntl } from 'react-intl';

import { trackEvent } from '@/lib/analytics';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import TC from '@/components/TC';

// export default function IndexPage({
//                                       featuredPosts,
//                                       featuredProjects,
//                                       featuredShorts,
//                                       introPosts,
//                                   }: InferGetStaticPropsType<typeof getStaticProps>) {
//     const populatedPosts = useInjectContentMeta('blog', featuredPosts);
//     const populatedIntro = useInjectContentMeta('blog', introPosts);
//     const populatedProjects = useInjectContentMeta('projects', featuredProjects);
//     const populatedShorts = useInjectContentMeta('library', featuredShorts);
export default function IndexPage() {
  const isLoaded = useLoaded();
  const intl = useIntl();

  return (
    <Layout>
      <Seo />

      <main>
        <section
          className={clsx(
            'min-h-main -mt-20 mb-20 flex flex-col justify-center',
            isLoaded && 'fade-in-start'
          )}
        >
          <article className='layout'>
            <h2 className='text-2xl md:text-4xl 2xl:text-5xl' data-fade='1'>
              {intl.formatMessage({ id: 'page.index.hi' })}
            </h2>
            {/*<h1*/}
            {/*  className='mt-1 text-3xl md:text-5xl 2xl:text-6xl'*/}
            {/*  data-fade='2'*/}
            {/*>*/}
            {/*  你可以叫我 <Accent>老刘</Accent>*/}
            {/*</h1>*/}
            <h4
              className='mt-1 text-3xl md:text-3xl 2xl:text-4xl'
              data-fade='2'
            >
              {intl.formatMessage({ id: 'page.index.one' })}
              <Accent>{intl.formatMessage({ id: 'page.index.name' })}</Accent>
            </h4>
            <p
              className={clsx(
                'mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6',
                'md:text-lg 2xl:text-xl'
              )}
              data-fade='3'
            >
              {intl.formatMessage({ id: 'page.index.two' })}
            </p>
            <p
              className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
              data-fade='4'
            >
              {intl.formatMessage({ id: 'page.index.three' })} telegram:
              QGxvYWZlcl9s (base64)
              {/*<CustomLink href='/guestbook'>guestbook</CustomLink>!*/}
            </p>
            <div
              data-fade='5'
              className='mt-8 flex flex-wrap gap-4 md:!text-lg'
            >
              <div className='group relative'>
                <div
                  className={clsx(
                    'absolute -inset-0.5 animate-tilt rounded blur',
                    'bg-gradient-to-r from-primary-300 to-primary-400',
                    'dark:from-primary-200 dark:via-primary-300',
                    'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                  )}
                />
                <ButtonLink href='#intro'>
                  {intl.formatMessage({ id: 'page.index.four' })}
                </ButtonLink>
              </div>
              <ButtonLink href='/about'>
                {intl.formatMessage({ id: 'page.index.about' })}
              </ButtonLink>
            </div>
            <div
              data-fade='6'
              className='mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8'
            >
              {/*<UnstyledLink*/}
              {/*  href='https://clarence.link/cv'*/}
              {/*  className={clsx(*/}
              {/*    'inline-flex items-center gap-1 text-sm font-medium md:text-base',*/}
              {/*    'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',*/}
              {/*    'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',*/}
              {/*    'transition-colors'*/}
              {/*  )}*/}
              {/*  onClick={() => {*/}
              {/*    trackEvent('Social Link: Resume', { type: 'link' });*/}
              {/*  }}*/}
              {/*>*/}
              {/*  <IoNewspaperSharp className='shrink-0' />*/}
              {/*  <span>Resume</span>*/}
              {/*</UnstyledLink>*/}
              <UnstyledLink
                href='https://twitter.com/LLiuruibin'
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}
                onClick={() => {
                  trackEvent('Social Link: Twitter', { type: 'link' });
                }}
              >
                <SiTwitter className='shrink-0 transition-colors group-hover:text-[#1da1f2]' />
                <span>@LLiuruibin</span>
              </UnstyledLink>
              <UnstyledLink
                href='https://github.com/liuruibin1'
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}
                onClick={() => {
                  trackEvent('Social Link: Github', { type: 'link' });
                }}
              >
                <SiGithub className='shrink-0' />
                <span>liuruibin1</span>
              </UnstyledLink>
            </div>
          </article>
          <UnstyledLink
            href='#intro'
            className={clsx(
              'absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10',
              'cursor-pointer rounded-md transition-colors',
              'hover:text-primary-300 focus-visible:text-primary-300'
            )}
          >
            <IoArrowDownOutline className='h-8 w-8 animate-bounce md:h-10 md:w-10' />
          </UnstyledLink>
          <TC
            className={clsx(
              'absolute bottom-0 right-6',
              'translate-y-[37%] transform-gpu',
              'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
              'z-[-1] opacity-70 dark:opacity-30'
            )}
          />
        </section>

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              id='intro'
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article
                className={clsx(
                  'layout flex flex-col-reverse items-center md:flex-row md:justify-start',
                  'md:gap-4'
                )}
                data-fade='0'
              >
                <div className='mt-8 h-full w-full md:mt-0'>
                  <h2 className='text-4xl md:text-6xl'>
                    <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                      {intl.formatMessage({ id: 'page.index.four' })}
                    </Accent>
                  </h2>
                  <div className='mt-4 text-base text-gray-600 dark:text-gray-300 md:text-lg'>
                    {/*<Tooltip*/}
                    {/*  withUnderline*/}
                    {/*  tipChildren={*/}
                    {/*    <>*/}
                    {/*      A mental model is an explanation of someone's{' '}*/}
                    {/*      <strong>thought process</strong> about how something*/}
                    {/*      works. You can use it as your own guide that you can*/}
                    {/*      test through some cases.*/}
                    {/*    </>*/}
                    {/*  }*/}
                    {/*>*/}
                    {/*  <span>Mental model</span>*/}
                    {/*</Tooltip>{' '}*/}
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.five' })}
                    </p>
                    <h3 className='text-green-200xl md:text-green-300xl'>
                      <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                        solidity{' '}
                        {intl.formatMessage({ id: 'page.index.skill' })}
                      </Accent>
                    </h3>{' '}
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.solidity.one' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.solidity.two' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.solidity.three' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.solidity.four' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.solidity.five' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.solidity.six' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.solidity.seven' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.solidity.eight' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.solidity.nine' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.solidity.ten' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.solidity.eleven' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.solidity.twelve' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({
                        id: 'page.index.solidity.thirteen',
                      })}
                    </p>
                    <h3 className='text-green-200xl md:text-green-300xl'>
                      <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                        java {intl.formatMessage({ id: 'page.index.skill' })}
                      </Accent>
                    </h3>{' '}
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.java.one' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.java.two' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.java.three' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.java.four' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.java.five' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.java.six' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.java.seven' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.java.eight' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.java.nine' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.java.ten' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.java.eleven' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.java.twelve' })}
                    </p>
                    <h3 className='text-green-200xl md:text-green-300xl'>
                      <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                        mysql，postgresql，oracle{' '}
                        {intl.formatMessage({ id: 'page.index.skill' })}
                      </Accent>
                    </h3>{' '}
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.sql.one' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.sql.two' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.sql.three' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.sql.four' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.sql.five' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.sql.six' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.sql.seven' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.sql.eight' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.sql.nine' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.sql.ten' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.sql.eleven' })}
                    </p>
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      {intl.formatMessage({ id: 'page.index.sql.twelve' })}
                    </p>
                    <UnstyledLink
                      href='https://github.com/liuruibin1/web3PanckSwap'
                      className={clsx(
                        'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                        'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                        'transition-colors'
                      )}
                      onClick={() => {
                        trackEvent('Social Link: Github', { type: 'link' });
                      }}
                    >
                      <SiGithub className='shrink-0' />
                      <span>
                        github {intl.formatMessage({ id: 'page.index.source' })}
                      </span>
                    </UnstyledLink>
                  </div>
                </div>
                <div className='flex h-full w-full justify-end'>
                  <ul className='relative h-full'>
                    <li
                      className={clsx(
                        'absolute max-w-[0px] transform-gpu',
                        'top-1/2 translate-y-[-55%] md:translate-y-[-50%] lg:translate-y-[-60%]',
                        'left-1/2 -translate-x-1/2 md:translate-x-[-50%] lg:translate-x-[-30%]',
                        'rotate-3 md:rotate-6 lg:rotate-12',
                        'pointer-events-none md:pointer-events-auto',
                        'list-image-[url(/favicon/lr-357x357.png)]'
                      )}
                    ></li>
                    <li className='mx-auto max-w-[0px] list-image-[url(/favicon/lr-357x357.png)]'></li>
                    <li
                      className={clsx(
                        'absolute max-w-[0px] transform-gpu pt-96',
                        'top-1/2 translate-y-[-55%] md:translate-y-[-50%] lg:translate-y-[-60%]',
                        'left-1/2 -translate-x-1/2 md:translate-x-[-50%] lg:translate-x-[-30%]',
                        'rotate-3 md:rotate-6 lg:rotate-12',
                        'pointer-events-none md:pointer-events-auto',
                        'list-image-[url(/favicon/hua-310x310.png)]'
                      )}
                    ></li>
                    <li className='mx-auto max-w-[0px] list-image-[url(/favicon/hua-310x310.png)] pt-96'></li>
                  </ul>
                </div>
              </article>
            </section>
          )}
        </InView>

        {/*<InView triggerOnce rootMargin='-40% 0px'>*/}
        {/*  {({ ref, inView }) => (*/}
        {/*    <section*/}
        {/*      ref={ref}*/}
        {/*      className={clsx('py-20', inView && 'fade-in-start')}*/}
        {/*    >*/}
        {/*      <article className='layout' data-fade='0'>*/}
        {/*        <h2 className='text-2xl md:text-4xl' id='blog'>*/}
        {/*          <Accent>Featured Posts</Accent>*/}
        {/*        </h2>*/}
        {/*        <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>*/}
        {/*          {populatedPosts.map((post, i) => (*/}
        {/*            <BlogCard*/}
        {/*              key={post.slug}*/}
        {/*              post={post}*/}
        {/*              className={clsx(i > 2 && 'hidden sm:block')}*/}
        {/*            />*/}
        {/*          ))}*/}
        {/*        </ul>*/}
        {/*        <ButtonLink*/}
        {/*          className='mt-4'*/}
        {/*          href='/blog'*/}
        {/*          onClick={() =>*/}
        {/*            trackEvent('Home: See more post', { type: 'navigate' })*/}
        {/*          }*/}
        {/*        >*/}
        {/*          See more post*/}
        {/*        </ButtonLink>*/}
        {/*      </article>*/}
        {/*    </section>*/}
        {/*  )}*/}
        {/*</InView>*/}

        {/*<InView triggerOnce rootMargin='-40% 0px'>*/}
        {/*  {({ ref, inView }) => (*/}
        {/*    <section*/}
        {/*      ref={ref}*/}
        {/*      className={clsx('py-20', inView && 'fade-in-start')}*/}
        {/*    >*/}
        {/*      <article className='layout' data-fade='0'>*/}
        {/*        <h2 className='text-2xl md:text-4xl' id='projects'>*/}
        {/*          <Accent>Featured Projects</Accent>*/}
        {/*        </h2>*/}
        {/*        <p className='mt-2 text-gray-600 dark:text-gray-300'>*/}
        {/*          Some projects that I'm proud of*/}
        {/*        </p>*/}
        {/*        <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>*/}
        {/*          {populatedProjects.map((project, i) => (*/}
        {/*            <ProjectCard*/}
        {/*              key={project.slug}*/}
        {/*              project={project}*/}
        {/*              className={clsx(i > 2 && 'hidden sm:block')}*/}
        {/*            />*/}
        {/*          ))}*/}
        {/*        </ul>*/}
        {/*        <ButtonLink*/}
        {/*          className='mt-4'*/}
        {/*          href='/projects'*/}
        {/*          onClick={() =>*/}
        {/*            trackEvent('Home: See more project', { type: 'navigate' })*/}
        {/*          }*/}
        {/*        >*/}
        {/*          See more project*/}
        {/*        </ButtonLink>*/}
        {/*      </article>*/}
        {/*    </section>*/}
        {/*  )}*/}
        {/*</InView>*/}

        {/*<InView triggerOnce rootMargin='-40% 0px'>*/}
        {/*  {({ ref, inView }) => (*/}
        {/*    <section*/}
        {/*      ref={ref}*/}
        {/*      className={clsx('py-20', inView && 'fade-in-start')}*/}
        {/*    >*/}
        {/*      <article className='layout' data-fade='0'>*/}
        {/*        <h2 className='text-2xl md:text-4xl' id='library'>*/}
        {/*          <Accent>Shorts</Accent>*/}
        {/*        </h2>*/}
        {/*        <p className='mt-2 text-gray-600 dark:text-gray-300'>*/}
        {/*          Short article that's not long enough to be a blog post,*/}
        {/*          usually comes from my personal notes.*/}
        {/*        </p>*/}
        {/*        <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>*/}
        {/*          {populatedShorts.map((short, i) => (*/}
        {/*            <ShortsCard*/}
        {/*              key={short.slug}*/}
        {/*              short={short}*/}
        {/*              className={clsx(i > 2 && 'hidden sm:block')}*/}
        {/*            />*/}
        {/*          ))}*/}
        {/*        </ul>*/}
        {/*        <ButtonLink*/}
        {/*          className='mt-4'*/}
        {/*          href='/shorts'*/}
        {/*          onClick={() =>*/}
        {/*            trackEvent('Home: See more shorts', { type: 'navigate' })*/}
        {/*          }*/}
        {/*        >*/}
        {/*          See more shorts*/}
        {/*        </ButtonLink>*/}
        {/*      </article>*/}
        {/*    </section>*/}
        {/*  )}*/}
        {/*</InView>*/}
      </main>
    </Layout>
  );
}

// export async function getStaticProps() {
//     generateRss();
//
//     const blogs = await getAllFilesFrontmatter('blog');
//     const projects = await getAllFilesFrontmatter('projects');
//     const shorts = await getAllFilesFrontmatter('library');
//
//     const featuredPosts = getFeatured(blogs, [
//         'fully-reusable-components',
//         'react-hydration',
//         'react-core-concept-rendering-state',
//         'nextjs-auth-hoc',
//         'nextjs-boilerplate-2023',
//         'nextjs-fetch-method',
//     ]);
//     const featuredProjects = getFeatured(projects, [
//         'hexcape',
//         'notiolink',
//         'ppdbsumsel',
//     ]);
//     const featuredShorts = getFeatured(shorts, [
//         'react/absolute-import',
//         'auth-context',
//         'mac/zsh',
//         'react/jsx-one-parent',
//         'styling/margin-usage',
//         'uncategorized/search-removal',
//     ]);
//
//     const introPosts = getFeatured(blogs, [
//         'btb-flex-mental-model',
//         'nextjs-fetch-method',
//     ]);
//
//     return {
//         props: {
//             featuredPosts,
//             featuredProjects,
//             featuredShorts,
//             introPosts,
//         },
//     };
// }
