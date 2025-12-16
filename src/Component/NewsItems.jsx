
const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3" style={{ maxWidth: "345px" }}>
      <img src={src} style={{height: "200px", width: "360px"}} className="card-img-top" alt={title ?? "news image"} />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No title"}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "This is our Program"}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems
