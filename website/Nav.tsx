import { css } from '@linaria/core';

import type { Direction } from '../src/types';

const navClassname = css`
  display: flex;
  flex-direction: column;
  white-space: nowrap;

  @media (prefers-color-scheme: light) {
    border-inline-start: 4px solid hsl(210deg 50% 80%);
  }
  @media (prefers-color-scheme: light) {
    border-inline-start: 4px solid hsl(210deg 50% 40%);
  }

  h1,
  h2 {
    margin: 8px;
  }

  a {
    color: white;
    font-size: 14px;
    line-height: 22px;
    text-decoration: none;
    padding-block: 0;
    padding-inline: 16px;
    transition: 0.1s background-color;

    &:hover {
      @media (prefers-color-scheme: light) {
        background-color: white;
      }
      @media (prefers-color-scheme: light) {
        background-color: white;
      }
    }
  }
`;

const activeNavClassname = css`
  font-weight: 500;

  @media (prefers-color-scheme: light) {
    background-color: hsl(210deg 50% 80%);
  }
  @media (prefers-color-scheme: light) {
    background-color: hsl(210deg 50% 40%);
  }

  a&:hover {
    @media (prefers-color-scheme: light) {
      background-color: hsl(210deg 50% 70%);
    }
    @media (prefers-color-scheme: light) {
      background-color: hsl(210deg 50% 50%);
    }
  }
`;

const rtlCheckboxClassname = css`
  padding-inline-start: 8px;
`;

interface Props {
  direction: Direction;
  onDirectionChange: (direction: Direction) => void;
}

export default function Nav({ direction, onDirectionChange }: Props) {
  return <nav className={navClassname} />;
}

function getActiveClassname({ isActive }: { isActive: boolean }) {
  return isActive ? activeNavClassname : '';
}
