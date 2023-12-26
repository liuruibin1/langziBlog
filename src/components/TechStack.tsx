import clsx from 'clsx';
import * as React from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaHardHat, FaJava, FaUbuntu } from 'react-icons/fa';
import { GrGraphQl } from 'react-icons/gr';
import {
  SiMysql,
  SiPrisma,
  SiReact,
  SiSolidity,
  SiTypescript,
} from 'react-icons/si';

import CustomLink from '@/components/links/CustomLink';
import Tooltip from '@/components/Tooltip';

export default function TechStack() {
  return (
    <div className='flex space-x-2 md:space-x-4'>
      {stacks.map((tech) => (
        <Tooltip key={tech.id} tipChildren={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'h-8 w-8 md:h-10 md:w-10',
              'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
              'transition-colors'
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: 'java',
    icon: FaJava,
    tooltip: (
      <>
        <CustomLink href='https://spring.io/'>java Spring</CustomLink>,
        可独立开发后台管理以及后端的开发及其部署。
      </>
    ),
  },
  {
    id: 'solidity',
    icon: SiSolidity,
    tooltip: (
      <>
        <CustomLink href='https://soliditylang.org/'>solidity</CustomLink>,
        主要用于编写与链上交互的合约。
      </>
    ),
  },
  {
    id: 'mysql',
    icon: SiMysql,
    tooltip: (
      <>
        <CustomLink href='https://www.mysql.com/'>mysql</CustomLink>
        用于数据库管理，存储数据。
        {/*, can't live without it! Check out my{' '}*/}
        {/*<CustomLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>*/}
        {/*  starter template*/}
        {/*</CustomLink>{' '}*/}
        {/*using Next.js, Tailwind CSS, and TypeScript.*/}
      </>
    ),
  },
  {
    id: 'postgresql',
    icon: BiLogoPostgresql,
    tooltip: (
      <>
        <CustomLink href='https://www.mysql.com/'>postgresql</CustomLink>
        用于数据库管理，存储数据。数据类型比mysql丰富，而且是开源的项目，性能扩展各方面都优于mysql。
        {/*, can't live without it! Check out my{' '}*/}
        {/*<CustomLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>*/}
        {/*  starter template*/}
        {/*</CustomLink>{' '}*/}
        {/*using Next.js, Tailwind CSS, and TypeScript.*/}
      </>
    ),
  },
  {
    id: 'graphql',
    icon: GrGraphQl,
    tooltip: (
      <>
        <CustomLink href='https://graphql.org/'>graphql</CustomLink>{' '}
        是一种轻量级非常方便查询的api
        {/*awesome, I have never achieved this much reusability. Make sure you get*/}
        {/*the{' '}*/}
        {/*<CustomLink href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'>*/}
        {/*  extension*/}
        {/*</CustomLink>*/}
        {/*.*/}
      </>
    ),
  },
  {
    id: 'ubuntu',
    icon: FaUbuntu,
    tooltip: (
      <>
        <CustomLink href='https://ubuntu.com/'>ubuntu</CustomLink>,
        服务器管理，用于部署项目在线上。
      </>
    ),
  },
  {
    id: 'prisma',
    icon: SiPrisma,
    tooltip: (
      <>
        <CustomLink href='https://www.prisma.io/'>Prisma</CustomLink>,
        一个简单的orm，与graphql配合使用，可以直接忽略java写接口。
      </>
    ),
  },
  {
    id: 'hardhat',
    icon: FaHardHat,
    tooltip: (
      <>
        <CustomLink href='https://hardhat.org/'>hardhat</CustomLink>,
        用来部署合约和验证合约，以及测试合约，全套流程，很好用。
      </>
    ),
  },
  {
    id: 'react',
    icon: SiReact,
    tooltip: (
      <>
        <CustomLink href='https://reactjs.org/'>React</CustomLink>,
        只会一点点，写页面不太会，正在努力研究中。
      </>
    ),
  },
  {
    id: 'typescript',
    icon: SiTypescript,
    tooltip: (
      <>
        <CustomLink href='https://www.typescriptlang.org/'>
          TypeScript
        </CustomLink>
        会一点点。
      </>
    ),
  },
];
