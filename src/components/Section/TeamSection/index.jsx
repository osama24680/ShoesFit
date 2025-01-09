import React from 'react';
import Spacing from '../../Spacing';
import SectionHeading from '../../SectionHeading';
import Team from '../../Team';

export default function TeamSection({ sectionTitle, sectionTitleUp, data }) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} center />
      <Spacing md="72" lg="50" />
      <div className="teamLayoutImages gy-3">
        {data?.map((item, index) => (
          // <div className="" key={index}>
            <Team {...item} />
          // </div>
        ))}
      </div>
    </div>
  );
}
