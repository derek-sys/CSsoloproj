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
        <p className="abstract">${abstract}</p>
      </ul>
    </article>
  );
};

export default journalArticleBox;
