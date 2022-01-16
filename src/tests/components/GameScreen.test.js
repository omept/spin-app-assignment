import { render, screen, } from '@testing-library/react';
import App from '../../App';
import React from 'react'
import { Config } from '../../utils/PlayState';

describe('Game Screen test', () => {

  test('that the machine starts with the symbols in some random position', () => {
    render(<App />);
    let scrnTlsDiv = screen.getAllByTestId('screenTile');
    expect(scrnTlsDiv).toHaveLength(Config.GAME_TILES_CNT);
  })

})
