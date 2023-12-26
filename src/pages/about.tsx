import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='About'
        description='Clarence is a front-end developer that started learning in May 2020. He write blogs about his approach and mental model on understanding topics in front-end development.'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout pt-20'>
            <h2 data-fade='0'>关于我</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>老刘</Accent>
            </h1>
            <div className='mt-4' data-fade='2'>
              {/*<CloudinaryImg*/}
              {/*  className='float-right ml-6 w-40 md:w-72'*/}
              {/*  publicId='theodorusclarence/about/self-3-cropped_cyfuvn.jpg'*/}
              {/*  width='1500'*/}
              {/*  height='1695'*/}
              {/*  alt='Photo of me looking really professional and definitely can impress your boss'*/}
              {/*  preview={false}*/}
              {/*  title=' '*/}
              {/*/>*/}
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  我在2019年毕业于福州理工学院，对于编程技术，我一开始是一窍不通，什么对象，类，变量完全不理解，包括各种逻辑如何实现。
                  我的专业是电子信息工程，我想我接触比较多的就是模电数电了，嵌入式了，让我去接电路呢，感觉兴趣不是特别大，让我做汇编硬件呢，没好好学，感觉对于0基础的我困难程度加大。
                  最终选择了java面向对象学习。
                  {/*<CustomLink href='/blog/youtube-list'>*/}
                  {/*  youtube videos*/}
                  {/*</CustomLink>{' '}*/}
                </p>
                <p data-fade='4'>
                  我的第一份工作在福大自动化科技，技术很简单，我想只要但凡了解一些代码的人都可以胜任这个工作。不过这个工作让我收获良多，属于是真正把我领进门，以前很多不懂的技术随着接触的时间，包括查询资料的
                  技术明显上涨，干了一年半载都熟悉后，才开始迷茫，这边的技术太简单了，再学下去肯定不是我想要的，基本上程序可以解决的问题，竟然使用存储过程和触发器，感觉再下去要脱节了。
                </p>
                <p data-fade='5'>
                  后来去了一家开发srm，crm的公司，在这里接触了springBoot和SpringCloud微服务的技术，以及了解到nacos等如何注册服务，如何引入依赖让微服务之间互相调用，以及各平台服务调用使用rabbitmq去做队列。
                  这里的技术不算太难，当然这时候我也了解到更多的新技术，做了crm和srm发觉这块似乎是比较重视业务，实现的方法并不是十分重要，总之第一要则，先实现不会出问题。
                  我时常会去了解一些权限架构，比如菜单角色用户权限，表的设计以及涉及到按钮权限。在这里我一开始觉得需求的变动太大，要反复修改代码，却会反复出现各种问题，尤其是修改别人的代码更甚，最令人害怕的就是组件内些jq代码，
                  写各种限制实现，最后代码东一块西一块，每人加点东西，导致谁都看不懂了，还有权限冲突不生效等情况，浪费了超级多的时间。
                  如果要接别人的代码，我觉得需要接过来然后每个功能代码拉出来重新优化一遍，如果直接开始改，后续再优化会更累的。
                </p>
                <p data-fade='6'>
                  最后一不小心进了一家做区块链技术的公司，一开始我对这块没有信心，大家都说不稳定，有风险。
                  这个我就不说什么了，没有资格去评判，但是在这里每天都更加充实，大家都是追寻新技术，并且经常优化代码，将一块写好的代码反复锤炼优化，每当一个新技术或者新项目出来大家就去追着看源码，并参考实现，很喜欢这种感觉。
                  在这里第一个接触的项目是做nft域名，属于nft项目，大概是仿造opensea也是买卖nft，对标域名，还有碎片化域名，分为一块一块售卖，还有拍卖投票功能等。
                  每天都在学习这方面的知识，似乎沉浸在知识的海洋，了解了web3的发展和崛起，以及金融玩法，我也拿了一些币去做一些测试和熟悉流程，现在主要就是erc20做代币，还有erc721做nft，游戏似乎也是nft属性的玩法。
                  接下来就是做lp和swap这块了，这块最早接触的是uniswap，后来出现了pancakeswap，这两个我个人觉得pancakeswap似乎会更好用一些。
                </p>
              </article>
              <h3 className='h4 mt-4' data-fade='6'>
                我现在的工作？
              </h3>
              <article className='prose mt-2 dark:prose-invert' data-fade='7'>
                <ul>
                  {/*<li>*/}
                  {/*  I'm a full-stack engineer at{' '}*/}
                  {/*  <CustomLink*/}
                  {/*    onClick={() =>*/}
                  {/*      trackEvent('Now: Dimension', { type: 'link' })*/}
                  {/*    }*/}
                  {/*    href='https://dimension.dev?ref=theodorusclarence.com'*/}
                  {/*  >*/}
                  {/*    Dimension*/}
                  {/*  </CustomLink>{' '}*/}
                  {/*  while working remotely from Jakarta, Indonesia*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  I'm a technical writer for{' '}*/}
                  {/*  <CustomLink*/}
                  {/*    onClick={() =>*/}
                  {/*      trackEvent('Now: LogRocket', { type: 'link' })*/}
                  {/*    }*/}
                  {/*    href='https://blog.logrocket.com/author/theodorusclarence/'*/}
                  {/*  >*/}
                  {/*    LogRocket*/}
                  {/*  </CustomLink>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  I'm a mentor! I do revision-style mentorship (*/}
                  {/*  <Tooltip*/}
                  {/*    tipChildren={*/}
                  {/*      <p className='italic'>*/}
                  {/*        *Try translating them to english*/}
                  {/*      </p>*/}
                  {/*    }*/}
                  {/*  >*/}
                  {/*    <CustomLink*/}
                  {/*      onClick={() =>*/}
                  {/*        trackEvent('Now: Mentor Thread', { type: 'link' })*/}
                  {/*      }*/}
                  {/*      href='https://x.com/th_clarence/status/1713454750090534948?s=20'*/}
                  {/*    >*/}
                  {/*      thread*/}
                  {/*    </CustomLink>*/}
                  {/*  </Tooltip>*/}
                  {/*  )*/}
                  {/*</li>*/}
                  <li>
                    暂时还在找，有外包活给我或者远程工作可以联系我，有正式聘全职工作也行。
                  </li>
                </ul>
              </article>

              <h3 className='mt-12' data-fade='8'>
                技术栈
              </h3>
              <figure className='mt-2' data-fade='9'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>合作</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>
                你要是觉得我技术能帮助到你，可以直接与我联系。
                微信：TGl1cnVpYmluNTI1（base64）
              </p>
            </article>
          </div>
        </section>

        {/*<section id='uses'>*/}
        {/*  <div className='layout mt-16'>*/}
        {/*    <h2>使用</h2>*/}
        {/*    <CloudinaryImg*/}
        {/*      className='mt-8 aspect-video'*/}
        {/*      publicId='theodorusclarence/about/setup.jpg'*/}
        {/*      width='2000'*/}
        {/*      height='1500'*/}
        {/*      alt='Photo of my desk setup'*/}
        {/*    />*/}
        {/*    <article className='prose mt-4 dark:prose-invert'>*/}
        {/*      <ul>*/}
        {/*        <li>MacBook Pro (13" M1 2020, 16GB, 1TB)</li>*/}
        {/*        <li>LG UltraFine™ 4K 32 Inch LG (32UN880-B)</li>*/}
        {/*        <li>Keychron K2v2</li>*/}
        {/*        <li>Logitech M590</li>*/}
        {/*        <li>Kindle Paperwhite (10th Generation)</li>*/}
        {/*        <li>Stramm Bruno Standing Desk 160x80</li>*/}
        {/*        <li>Pexio Jervis Ergonomic Chair</li>*/}
        {/*        <li>Press Play Desk Shelf</li>*/}
        {/*        <li>Mi Computer Monitor Light Bar</li>*/}
        {/*      </ul>*/}
        {/*    </article>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </main>
    </Layout>
  );
}
