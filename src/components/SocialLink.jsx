import React from "react";

const SocialLink = (props) => {
  // eslint-disable-next-line react/prop-types
  const { icon, link, name } = props;

  const cloneIcon = React.cloneElement(icon, {
    size: "30",
    className:
      "text-white h-[60px] w-[60px] p-3 group-hover:text-lgbtq-pink duration-300",
  });

  return (
    <div className="group w-fit">
      <a
        className="flex items-center hover:text-lgbtq-pink duration-300"
        href={link}
        rel="noopener noreferrer nofollow external"
      >
        {cloneIcon}
        <span>{name}</span>
      </a>
    </div>
  );
};

export default SocialLink;
