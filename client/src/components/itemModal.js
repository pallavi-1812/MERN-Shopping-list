import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { v1 as uuid } from "uuid";
import { connect } from 'react-redux';
import { addItems } from '../actions/itemAction';
import store from '../store';

const ItemModal = () => {


    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");

    const toggle = () => setModal(!modal);

    function onChanged(event) {
        const value = event.target.value;
        setName(value);
    };

    function onSubmitting(event) {
        event.preventDefault();

        const newItem = {
            id: uuid(),
            name
        };


        // Add item via addItem action
        store.dispatch(addItems(newItem));

        // Close modal
        toggle();
    };

    return (
        <div>
            <Button color="dark" onClick={toggle} className="add-btn">Add Item</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add to Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmitting}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add to Shopping List"
                                onChange={onChanged}
                            />
                            <Button color="dark" style={{ marginTop: '2rem' }} block>Add Item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

const mapStateToProps = state => ({
    item: state.item
});

const mapDispatchToProps = dispatch => {
    return {
        addItems: () => dispatch(addItems())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);