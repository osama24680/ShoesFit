import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';


export default function Post({
  title,
  thumbUrl,
  date,
  btnText,
  href,
  socialShare,
  variant,
  idBlogPost
}) {
  return (
    <div className={`cs_post cs_style_1 ${variant}`}>
      <Link to={`/blog/${idBlogPost}`} className="cs_post_thumb cs_view_mouse">
        <img src={thumbUrl} alt={title} />
      </Link>
      <div className="cs_post_info">
        <div>
          <div className="cs_post_meta">
            <div className="cs_posted_by">{date}</div>
            {socialShare && (
              <div className="cs_post_social">
                <Link
                  to="https://www.linkedin.com/in/osama-megahed-887b76201/"
                  target="_blank"
                  className="cs_center rounded-circle"
                >
                  <Icon icon="fa-brands:linkedin-in" />
                </Link>
                <Link
                  to="/"
                  target="_blank"
                  className="cs_center rounded-circle"
                >
                  <Icon icon="fa-brands:facebook-f" />
                </Link>
                <Link
                  to="https://www.instagram.com/osamamegahed12/"
                  target="_blank"
                  className="cs_center rounded-circle"
                >
                  <Icon icon="fa-brands:instagram" />
                </Link>
              </div>
            )}
          </div>
          <h2 className="cs_post_title cs_semibold cs_fs_32">
            <Link to={`/blog/${idBlogPost}`}>{title}</Link>
          </h2>
        </div>
        {btnText && (
          <div className="cs_heading_color cs_medium">
            <Link to={href} className="cs_post_btn">
              {btnText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
