import clsx from 'clsx';
import * as React from 'react';
import { useIntl } from 'react-intl';

import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';

export default function AboutPage() {
  const isLoaded = useLoaded();

  const intl = useIntl();

  return (
    <Layout>
      <Seo
        templateTitle='About'
        description='Clarence is a front-end developer that started learning in May 2020. He write blogs about his approach and mental model on understanding topics in front-end development.'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout pt-20'>
            <h2 data-fade='0'>
              {intl.formatMessage({ id: 'page.index.about' })}
            </h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>{intl.formatMessage({ id: 'page.index.name' })}</Accent>
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
                  {intl.formatMessage({ id: 'page.about.one' })}
                  {/*<CustomLink href='/blog/youtube-list'>*/}
                  {/*  youtube videos*/}
                  {/*</CustomLink>{' '}*/}
                </p>
                <p data-fade='4'>
                  {intl.formatMessage({ id: 'page.about.two' })}
                </p>
                <p data-fade='5'>
                  {intl.formatMessage({ id: 'page.about.three' })}
                </p>
                <p data-fade='6'>
                  {intl.formatMessage({ id: 'page.about.four' })}
                </p>
              </article>
              <h3 className='h4 mt-4' data-fade='6'>
                {intl.formatMessage({ id: 'page.about.five' })}
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
                  <li>{intl.formatMessage({ id: 'page.about.six' })}</li>
                </ul>
              </article>

              <h3 className='mt-12' data-fade='8'>
                {intl.formatMessage({ id: 'page.about.technology.stack' })}
              </h3>
              <figure className='mt-2' data-fade='9'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2> {intl.formatMessage({ id: 'page.about.cooperate' })}</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>
                {intl.formatMessage({ id: 'page.about.eleven' })}
                VX：TGl1cnVpYmluNTI1（base64）
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
