import './root.css';

import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom';
import { css } from '@linaria/core';

import type { Direction } from '../src/types';
import AllFeatures from './demos/AllFeatures';
import Animation from './demos/Animation';
import CellNavigation from './demos/CellNavigation';
import ColumnGrouping from './demos/ColumnGrouping';
import ColumnSpanning from './demos/ColumnSpanning';
import ColumnsReordering from './demos/ColumnsReordering';
import CommonFeatures from './demos/CommonFeatures';
import ContextMenuDemo from './demos/ContextMenu';
import CustomizableRenderers from './demos/CustomizableRenderers';
import HeaderFilters from './demos/HeaderFilters';
import InfiniteScrolling from './demos/InfiniteScrolling';
import MasterDetail from './demos/MasterDetail';
import MillionCells from './demos/MillionCells';
import NoRows from './demos/NoRows';
import ResizableGrid from './demos/Resizable';
import RowGrouping from './demos/RowGrouping';
import RowsReordering from './demos/RowsReordering';
import ScrollToCell from './demos/ScrollToCell';
import TreeView from './demos/TreeView';
import VariableRowHeight from './demos/VariableRowHeight';
import Nav from './Nav';

const mainClassname = css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  block-size: 100vh;
  padding: 8px;
  contain: inline-size;
`;

function Root() {
  const [direction, setDirection] = useState<Direction>('ltr');
  return (
    <Router>
      <Nav direction={direction} onDirectionChange={setDirection} />
      <main className={mainClassname} dir={direction}>
        <Routes>
          <Route path="header-filters" element={<HeaderFilters direction={direction} />} />
        </Routes>
      </main>
    </Router>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
