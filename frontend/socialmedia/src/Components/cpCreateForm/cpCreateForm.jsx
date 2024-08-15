import './cpCreateForm.css';
import axios from 'axios';

export default function CpCreateForm() {

    function handleCreatePost(e) {
        e.preventDefault();

        const imgUrl = `https://via.placeholder.com/640x480.png/${document.getElementById('create-modal-input-color').value.replace('#', '')}?text=${document.getElementById('create-modal-input-img-text').value}`;
        const caption = document.getElementById('create-modal-input-caption').value;


        
    }

    return (
        <>
            <div id="create-modal-backshadow">
                <form id="create-modal" onSubmit={(e) => handleCreatePost(e)}>
                    <h1>Create new Post</h1>
                    <div>
                        <p className="create-modal-title">Caption</p>
                        <input type="text" name="" className='create-modal-input' id="create-modal-input-caption" />
                    </div>
                    <div>
                        <p className="create-modal-title">Color</p>
                        <input type="color" className='create-modal-input' id="create-modal-input-color" />
                    </div>
                    <div>
                        <p className="create-modal-title">Image text</p>
                        <input type="text" name="" className='create-modal-input' id="create-modal-input-img-text" />
                    </div>
                    <button type="submit" id="create-modal-submit-btn">Create</button>
                </form>
            </div>
        </>
    )
}