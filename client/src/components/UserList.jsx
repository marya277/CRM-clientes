import UserCard from "./UserCard";

function UserList({ users, onEdit, onDelete }) {
    return (
    <div style={{ background: '#f2f2f2', padding: '16px' }}>
        {users.map((user) => (
        <UserCard
            key={user.id_contacto}
            name={`${user.nombre} ${user.apellido}`}
            phoneNumber={user.telefono}
            onEdit={() => onEdit(user)}
            onDelete={() => onDelete(user.id_contacto)}
        />
    ))}
    </div>
    );
}

export default UserList;
