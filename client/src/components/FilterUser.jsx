const FilterUser = ({ filteredUsers }) => {
    return (
        <div>
        {filteredUsers && filteredUsers.length > 0 ? (
            <List>
            {filteredUsers.map(contacto => (
                <ListItem key={contacto.id_contacto}>{contacto.nombre}</ListItem>
            ))}
            </List>
            ) : (
            <p>
            {filteredUsers === null
                ? 'Ingrese un nombre para filtrar.'
                : 'No se encontraron resultados.'}
            </p>
        )}
        </div>
    );
    };
    export default FilterUser;
