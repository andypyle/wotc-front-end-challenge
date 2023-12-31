import { css, Global } from '@emotion/react'

// Globals + CSS Reset
export const globalStyles = (
  <Global
    styles={css`
      :root {
        --blue: #6a9dd3;
        --blue-ish: #3c91e6;
        --lighter-blue-ish: #5da3ea;
        --dark-gray: #0c0e0f;
        --gray: #1b1c1e;
        --lighter-gray: #303133;
        --gradient-disabled: #4a4a4a;
        --green: #5cad7e;
        --lighter-green: #6ab489;
      }

      body {
        background-color: var(--dark-gray);
        background-image: url('./talent-calc-bg.png');
        color: #eee;
        max-height: 100%;

        & > div {
          padding: 1rem;
        }
      }

      html {
        height: 100%;
      }

      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `}
  />
)
