import React from 'react';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../actions/contactAction';
import { useDispatch } from 'react-redux';

export const Contact = ({contact}) => {
    const dispatch = useDispatch();
    const { name, phone, email, id } = contact;

    return (
        
            <tr>
                <td>{ name }</td>
                <td>{ phone }</td>
                <td>{ email }</td>
                <td className="actions">
                    <Link to={`/contacts/edit/${id}`}>
                        <span className="mr-3">Edit</span>
                    </Link>
                    <span className="text-danger" onClick={() => dispatch(deleteContact(id))}>Delete</span>
                </td>
            </tr>
        
    )
}
