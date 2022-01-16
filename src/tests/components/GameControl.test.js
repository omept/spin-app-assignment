import { render, screen, } from '@testing-library/react';
import App from '../../App';
import React from 'react'
import { Config } from '../../utils/PlayState';

describe('Game Control test', () => {

  test("that game auto plays after 5 seconds(default config) of starting.", done => {
    //  ${Config.AUTO_PLAY_COUNTDOWN} == 5
    render(<App />);

    let tO = setTimeout(() => {
      let scrnTlsDiv = screen.queryAllByTestId('screenTile');
      let stpBtn = screen.queryAllByTestId('stpBtn');

      // tiles are 0 when game is spinning
      expect(scrnTlsDiv).toHaveLength(0);

      // the stop button is visible when spining
      expect(stpBtn).toHaveLength(1);

      clearTimeout(tO);
      done();
    }, (Config.AUTO_PLAY_COUNTDOWN + 2) * 1000);

  }, (Config.AUTO_PLAY_COUNTDOWN + 3) * 1000)

})
