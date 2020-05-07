/* eslint-disable camelcase, react/no-array-index-key, global-require, import/no-dynamic-require */
import React from 'react';

const journalArticleBox = ({ info }) => {
  const { id, abstract } = info;

  return (
    <article className="reactsucks">
      <div className="articleContainer">
        <h3 className="id">${id}</h3>
      </div>
      <ul className="abstract">
        <h6 className="abstract">${abstract}</h6>
      </ul>
      <button id="buttons" type="submit">
        Pull/Save
      </button>
    </article>
  );
};

export default journalArticleBox;
