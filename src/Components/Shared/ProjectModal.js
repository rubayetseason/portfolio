import React from 'react';

const ProjectModal = ({modalData, setModalData}) => {
    const { name, project_info, image, short_detail, live } = modalData;
  const  handleclick = () => {
    setModalData(null);
    }
    return (
        <div>
<input type="checkbox" id="project-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative w-11/12 max-w-5xl">
    <label onClick={handleclick} htmlFor="project-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
        </div>
    );
};

export default ProjectModal;