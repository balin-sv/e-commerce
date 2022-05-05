import "./modal.css";

const Modal = ({ modalInfo, onSetModal, isModal }) => {
  let modelStyle = {
    display: "block",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  };
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        onSetModal(false);
        e.stopPropagation();
      }}
      class="modal show fade"
      style={modelStyle}
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{`Category ${modalInfo.category}`}</h5>
            <button
              onClick={(e) => {
                e.preventDefault();
                onSetModal(false);
              }}
              className="btn-close"
            ></button>
          </div>

          <div class="modal-body">
            <div>
              {" "}
              <h5 class="modal-title">{`Product name ${modalInfo.title}`}</h5>
              <img src={modalInfo.image} className="img-fluid"></img>
            </div>
            <div>
              {" "}
              <p>
                <span>Precio </span>
                {modalInfo.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
