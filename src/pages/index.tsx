import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';
import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { InView } from 'react-intersection-observer';

import { trackEvent } from '@/lib/analytics';
import { getAllFilesFrontmatter, getFeatured } from '@/lib/mdx.server';
import { generateRss } from '@/lib/rss';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import BlogCard from '@/components/content/blog/BlogCard';
import ShortsCard from '@/components/content/card/ShortsCard';
import ProjectCard from '@/components/content/projects/ProjectCard';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import TC from '@/components/TC';
import Tooltip from '@/components/Tooltip';

export default function IndexPage({
  featuredPosts,
  featuredProjects,
  featuredShorts,
  introPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const populatedPosts = useInjectContentMeta('blog', featuredPosts);
  const populatedIntro = useInjectContentMeta('blog', introPosts);
  const populatedProjects = useInjectContentMeta('projects', featuredProjects);
  const populatedShorts = useInjectContentMeta('library', featuredShorts);

  const isLoaded = useLoaded();

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
              你好!
            </h2>
            <h1
                className='mt-1 text-3xl md:text-5xl 2xl:text-6xl'
                data-fade='2'
            >
              你可以叫我 <Accent>老刘</Accent>
            </h1>
            <p
              className={clsx(
                'mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6',
                'md:text-lg 2xl:text-xl'
              )}
              data-fade='3'
            >
              本人从事java后端和web3合约开发，是一个有比较多想法，热爱分享和热爱学习新技术的人！
            </p>
            <p
              className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
              data-fade='4'
            >
              如果想要联系我，可以通过telegram飞机联系我！
              telegram: QGxvYWZlcl9s (base64)
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
                <ButtonLink href='#intro'>阅读博客</ButtonLink>
              </div>
              <ButtonLink href='/about'>关于我</ButtonLink>
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
                      工作技能
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
                    本人比较熟悉eth公链，bnb公链，以及apt公链，对lp质押以及swap都有过深入了解，V2swap兑换等。
                      </p>
                    <h3 className='text-green-200xl md:text-green-300xl'>
                      <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                        solidity技术
                      </Accent>
                    </h3>{' '}
                    <p
                        className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                        data-fade='4'
                    >
                    有专门研究过uniswap和pancakeswap的源码，知道如何实现添加移除流动池，以及对兑换代币有过进一步了解。
                    </p>
                    <p
                        className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                        data-fade='4'
                    >
                      了解并熟练使用openzeppelin提供的库包括了一些标准合约的实现，例如 ERC-20 和 ERC-721 代币，同时还提供了一些注重安全性的合约，以帮助开发人员构建安全的智能合约。
                      {/*<CustomLink href='/guestbook'>guestbook</CustomLink>!*/}
                    </p>
                    {/*by seeing how they work{' '}*/}
                    {/*<strong className='text-gray-700 dark:text-gray-200'>*/}
                    {/*  fundamentally*/}
                    {/*</strong>*/}

                    <h3 className='text-green-200xl md:text-green-300xl'>
                      <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                        java技术
                      </Accent>
                    </h3>{' '}
                    <p
                        className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                        data-fade='4'
                    >
                      一开始做的是erp项目，了解了从客户到订单到财务的流程开发，这种项目国内大多都是基于平台化开发，这时候需要学会如何使用封装过的jquery技术去应对一些
                      前端的按钮控制和一些提示控制，以及使用ajax去调用接口。<br/>
                      后端则是spring全家桶开发，涉及到springboot+springcloud进行微服务开发，nacos作为注册中心，打包则由jenkins完成。此间有进行表的设计，比如客户表有客户信息表，而客户又存在潜在客户和正式客户
                      则需要使用到子表分开存储两者不同的信息。<br/>
                    </p>
                    <p
                        className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                        data-fade='4'
                    >
                      也有做过医院的项目，使用的是spring中Hibernate去开发，没用到xml配置这块，基本由Hibernate提供的query去查询以及操作。
                      具体业务技术在关于我里面会写详细。
                      {/*<CustomLink href='/guestbook'>guestbook</CustomLink>!*/}
                    </p>
                    <p
                        className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                        data-fade='4'
                    >
                      我最喜欢做的当然还是金融业务，也就是web3这一块，一开始做的是nft，当初入行是一点都不懂，一点一点摸清楚eth链上操作以及钱包是什么，然后也有充值一些币，
                      去研究交易所以及链上是如何运转的。
                      了解怎么抓取链上的数据，以及java如何调用合约，当然我比较熟悉的还是充值提现这一块。
                      如何调用合约的我自己写了demo，源码可以自取
                      {/*<CustomLink href='/guestbook'>guestbook</CustomLink>!*/}
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
                      <span>github源码</span>
                    </UnstyledLink>
                  </div>
                </div>
                <div className='h-full w-full flex justify-end'>
                  <ul className="relative h-full">
                    <li className={clsx(
                        'absolute max-w-[0px] transform-gpu',
                        'top-1/2 translate-y-[-55%] md:translate-y-[-50%] lg:translate-y-[-60%]',
                        'left-1/2 -translate-x-1/2 md:translate-x-[-50%] lg:translate-x-[-30%]',
                        'rotate-3 md:rotate-6 lg:rotate-12',
                        'pointer-events-none md:pointer-events-auto',
                        'list-image-[url(/favicon/lr-357x357.png)]'
                    )}></li>
                    <li className='mx-auto max-w-[0px] list-image-[url(/favicon/lr-357x357.png)]'></li>
                  </ul>
                  {/*<ul className='relative h-full'>*/}
                  {/*  <BlogCard*/}
                  {/*    className={clsx(*/}
                  {/*      'absolute max-w-[350px] transform-gpu',*/}
                  {/*      'top-1/2 translate-y-[-55%] md:translate-y-[-50%] lg:translate-y-[-60%]',*/}
                  {/*      'left-1/2 -translate-x-1/2 md:translate-x-[-50%] lg:translate-x-[-30%]',*/}
                  {/*      'rotate-3 md:rotate-6 lg:rotate-12',*/}
                  {/*      'pointer-events-none md:pointer-events-auto'*/}
                  {/*    )}*/}
                  {/*    post={populatedIntro[1]}*/}
                  {/*  />*/}
                  {/*  <BlogCard*/}
                  {/*    className='mx-auto max-w-[350px]'*/}
                  {/*    post={populatedIntro[0]}*/}
                  {/*  />*/}
                  {/*</ul>*/}
                </div>
              </article>
            </section>
          )}
        </InView>

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='blog'>
                  <Accent>Featured Posts</Accent>
                </h2>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {populatedPosts.map((post, i) => (
                    <BlogCard
                      key={post.slug}
                      post={post}
                      className={clsx(i > 2 && 'hidden sm:block')}
                    />
                  ))}
                </ul>
                <ButtonLink
                  className='mt-4'
                  href='/blog'
                  onClick={() =>
                    trackEvent('Home: See more post', { type: 'navigate' })
                  }
                >
                  See more post
                </ButtonLink>
              </article>
            </section>
          )}
        </InView>

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='projects'>
                  <Accent>Featured Projects</Accent>
                </h2>
                <p className='mt-2 text-gray-600 dark:text-gray-300'>
                  Some projects that I'm proud of
                </p>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {populatedProjects.map((project, i) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      className={clsx(i > 2 && 'hidden sm:block')}
                    />
                  ))}
                </ul>
                <ButtonLink
                  className='mt-4'
                  href='/projects'
                  onClick={() =>
                    trackEvent('Home: See more project', { type: 'navigate' })
                  }
                >
                  See more project
                </ButtonLink>
              </article>
            </section>
          )}
        </InView>

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='library'>
                  <Accent>Shorts</Accent>
                </h2>
                <p className='mt-2 text-gray-600 dark:text-gray-300'>
                  Short article that's not long enough to be a blog post,
                  usually comes from my personal notes.
                </p>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {populatedShorts.map((short, i) => (
                    <ShortsCard
                      key={short.slug}
                      short={short}
                      className={clsx(i > 2 && 'hidden sm:block')}
                    />
                  ))}
                </ul>
                <ButtonLink
                  className='mt-4'
                  href='/shorts'
                  onClick={() =>
                    trackEvent('Home: See more shorts', { type: 'navigate' })
                  }
                >
                  See more shorts
                </ButtonLink>
              </article>
            </section>
          )}
        </InView>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  generateRss();

  const blogs = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('projects');
  const shorts = await getAllFilesFrontmatter('library');

  const featuredPosts = getFeatured(blogs, [
    'fully-reusable-components',
    'react-hydration',
    'react-core-concept-rendering-state',
    'nextjs-auth-hoc',
    'nextjs-boilerplate-2023',
    'nextjs-fetch-method',
  ]);
  const featuredProjects = getFeatured(projects, [
    'hexcape',
    'notiolink',
    'ppdbsumsel',
  ]);
  const featuredShorts = getFeatured(shorts, [
    'react/absolute-import',
    'auth-context',
    'mac/zsh',
    'react/jsx-one-parent',
    'styling/margin-usage',
    'uncategorized/search-removal',
  ]);

  const introPosts = getFeatured(blogs, [
    'btb-flex-mental-model',
    'nextjs-fetch-method',
  ]);

  return {
    props: {
      featuredPosts,
      featuredProjects,
      featuredShorts,
      introPosts,
    },
  };
}
