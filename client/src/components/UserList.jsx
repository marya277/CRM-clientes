import React from 'react';
import UserCard from "./UserCard";

function UserList({ users, onEdit, onDelete, filterText }) {
  const filteredUsers = users.filter((user) =>
    `${user.nombre} ${user.apellido}`.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div style={{ background: '#f2f2f2', padding: '16px' }}>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id_contacto}
            name={`${user.nombre} ${user.apellido}`}
            phoneNumber={user.telefono}
            onEdit={() => onEdit(user)}
            onDelete={() => onDelete(user.id_contacto)}
          />
        ))
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default UserList;
