import { useState } from "react";

function PetItem(props) {
  const [image, setImage] = useState(props.pet.image);
  const changeImage = () => setImage(props.pet.image2);
  const onClickAdopt = () => {
    if (window.confirm(`adopt ${props.pet.name}?`))
      props.handleAdopt(props.pet.id);
  };
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={props.pet.name} src={image} />
        <div className="content">
          <h3>{props.pet.name}</h3>
          <button type="button" onClick={changeImage} className="btn btn-info">
            Pet
          </button>
          <button
            onClick={onClickAdopt}
            type="button"
            class="btn btn-info  m-2"
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
