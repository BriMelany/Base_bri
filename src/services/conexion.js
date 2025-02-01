import pg from 'pg';
const {Client}=pg;

const config={
    user: 'bd_base_bri_user',
    host: 'dpg-cuep62dumphs73ag0r8g-a.oregon-postgres.render.com',
    database: 'bd_base_bri',
    password: '0KbjpRIXBYqyVKEvkS3ngRXHl4EAMssb',
    port: 5432,
    ssl : {
        rejectUnauthorized: false
    }
}

export async function conexion(params){
    const client=new Client(config);
    try{
        await client.connect();
        console.log('Conexión exitosa');
    }catch(e){
        console.log('Error en la conexión');
    }

}

export async function ConsultarProductos() {
    const client = new Client(config);
    try {
        await client.connect();
        const result = await client.query('SELECT * FROM productos');
        return result.rows;
    } catch (error) {
        console.log('Error en la conexión');
    }
}