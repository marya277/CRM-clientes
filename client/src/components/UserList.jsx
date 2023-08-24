import UserCard from './UserCard';

const UserList = ({ users }) => (
    <div style={{ background: '#f2f2f2', padding: '15px', maxWidth: '640px' }}>
    {users.map((user) => (
        <UserCard
        key={user.id_contacto}
        name={`${user.nombre} ${user.apellido}`}
        phoneNumber={user.telefono}
        />
    ))}
    </div>
);

export default UserList;
