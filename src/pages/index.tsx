import clsx from 'clsx';
import * as React from 'react';
import { IoArrowDownOutline } from 'react-icons/io5';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { InView } from 'react-intersection-observer';

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
              如果想要联系我，可以通过telegram飞机联系我！ telegram:
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
                <ButtonLink href='#intro'>工作技能</ButtonLink>
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
                      1、熟练掌握 Solidity
                      编程语言，了解合约的结构、函数、变量声明等基本语法。
                      <br />
                      2、了解 Solidity 中的数据类型、控制结构、函数修饰符等。
                      <br />
                      3、能够编写智能合约，包括 ERC-20、ERC-721 等标准合约。
                      <br />
                      4、了解智能合约的生命周期、部署、调用等。
                      <br />
                      5、了解以太坊区块链网络的基本原理和运作机制。
                      <br />
                      6、知道如何连接以太坊网络，选择合适的节点服务。
                      <br />
                      7、掌握 Web3.js 或 Ethers.js 等以太坊 JavaScript
                      库，以便与以太坊区块链进行交互。
                      <br />
                      8、能够通过库调用合约函数，查询状态和发送交易。
                      <br />
                      9、熟悉 Hardhat 等 Solidity
                      开发框架，用于合约的编译、测试和部署。
                      <br />
                      10、了解智能合约的安全性问题，避免常见的漏洞，如重入攻击、溢出等。
                      <br />
                      11、使用工具进行代码审计，确保合约的安全性。
                      <br />
                      12、优化智能合约的 gas 消耗，提高合约的执行效率。
                      <br />
                      13、了解 gas 价格和 gas 上限的概念。
                      <br />
                    </p>
                    <h3 className='text-green-200xl md:text-green-300xl'>
                      <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                        java技术
                      </Accent>
                    </h3>{' '}
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      1、熟练使用spring全家桶进行开发
                      <br />
                      2、对 Java
                      语言的深入理解，包括面向对象编程（OOP）、多线程编程、异常处理等。
                      <br />
                      3、掌握 Java EE（Enterprise Edition）和 Spring
                      Framework规范。
                      <br />
                      4、熟悉常见的 Web 开发概念，包括 HTTP 协议、RESTful
                      架构等。
                      <br />
                      5、对现代的前端框架（如 React、Angular 或
                      Vue.js）有基本了解。
                      <br />
                      6、了解和实践微服务架构，包括服务发现、容器化（Docker）、容器编排（Kubernetes）等
                      <br />
                      7、了解消息队列的概念和使用，熟悉 RabbitMQ、Apache Kafka
                      ，实践消息驱动的开发，理解异步消息处理。
                      <br />
                      8、熟悉常见的安全漏洞和防范措施，包括跨站脚本（XSS）、跨站请求伪造（CSRF）等。
                      <br />
                      9、实施身份验证和授权，了解 OAuth 和 JWT。
                      <br />
                      10、熟悉版本控制工具，如 Git。
                      <br />
                      11、了解云服务提供商（如 AWS、Azure、Google
                      Cloud）的基本服务和部署流程。
                      <br />
                      12、了解 Docker 容器化技术和 Kubernetes 编排系统。
                      <br />
                    </p>
                    <h3 className='text-green-200xl md:text-green-300xl'>
                      <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                        mysql，postgresql，oracle技术
                      </Accent>
                    </h3>{' '}
                    <p
                      className='mt-3 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-4 md:text-lg 2xl:text-xl'
                      data-fade='4'
                    >
                      1、熟练掌握 SQL（Structured Query
                      Language），包括对数据的增、删、改、查等基本操作。
                      <br />
                      2、了解复杂查询、连接、子查询等高级 SQL 操作。
                      <br />
                      3、能够设计规范的数据库模型，包括表的设计、关系建立、索引的使用等。
                      <br />
                      4、了解范式化和反范式化的概念。
                      <br />
                      5、了解索引的类型（如 B
                      树索引、哈希索引）及其在数据库查询性能优化中的作用。
                      <br />
                      6、能够选择合适的字段创建索引，避免滥用索引
                      <br />
                      7、理解数据库事务的概念，掌握事务的 ACID 特性。
                      <br />
                      8、能够正确使用事务，确保数据的一致性和完整性。
                      <br />
                      9、使用数据库性能分析工具，定位和解决慢查询、性能瓶颈等问题。
                      <br />
                      10、优化查询语句，避免全表扫描，提高查询效率。
                      <br />
                      11、避免 SQL 注入等安全威胁。
                      <br />
                      12、熟悉主从复制、读写分离等技术。
                      <br />
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
