const TopicLayout = ({ title, intro, image, children }) => {
  return (
    <article className="topic">
      <header className="hero">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </header>

      {image && (
        <figure className="hero-media">
          <img src={image.src} alt={image.alt} />
          {image.caption && (
            <figcaption className="media-caption">{image.caption}</figcaption>
          )}
        </figure>
      )}

      {children}
    </article>
  );
};

export default TopicLayout;
