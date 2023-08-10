const Card = (props) => {
  return (
    <div className="card">
      <img {...props} alt={props.alt} />
    </div>
  );
};

export default Card;
