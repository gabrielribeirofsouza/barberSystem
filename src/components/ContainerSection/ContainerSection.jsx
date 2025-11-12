import styles from './ContainerSection.module.css'
import {useEffect, useState} from 'react'
import { FaCalendarDay, FaCartPlus, FaClock, FaProductHunt, FaUserCheck, FaUserFriends } from 'react-icons/fa'
import CardCLiente from '../../components/CardCliente/CardCliente';
import CardHorario from '../CardHorario/CardHorario';
import CardProduto from '../CardProduto/CardProduto';
import { useContext } from 'react';
import CLIENTES from '../../store/context/ClientesContext';
import PRODUTOS from '../../store/context/ProdutoContext';
import { getHorarios, updateHorario } from '../../services/api/horarios';

function ContainerSection({titleContainer, id, description}){
    const {cliente, setCliente} = useContext(CLIENTES)
    const {infoProduct} = useContext(PRODUTOS)
    const [horarios, setHorarios] = useState([]);
    const dias = [
        {dia: 'Segunda-feira'},
        {dia: 'Terça-feira'},
        {dia: 'Quarta-feira'},
        {dia: 'Quinta-feira'},
        {dia: 'Sexta-feira'},
        {dia: 'Sábado'},
        {dia: 'Domingo'},
    ]

   useEffect(() => {
    if (id === 'Horarios') {
        async function carregar() {
            try {
                const barbeiroId = 1; // futuramente pegar do login
                const data = await getHorarios(barbeiroId);

                // Cria o array de 7 dias com fallback para horários padrões
                const diasDaSemana = [
                    'Segunda-feira', 'Terça-feira', 'Quarta-feira',
                    'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'
                ];

                const horariosMapeados = diasDaSemana.map(diaNome => {
                    const diaDb = data.find(h => h.dia_semana === diaNome);
                    return diaDb || {
                        id_agenda: null,
                        dia_semana: diaNome,
                        hora_abertura: '09:00',
                        hora_fechamento: '18:00',
                        status_agenda: 1
                    };
                });

                setHorarios(horariosMapeados);

            } catch (error) {
                console.error('Erro ao carregar horários:', error);
            }
        }
        carregar();
    }
}, [id]);

    const handleSaveHorario = async (id_agenda, novo) => {
        try {
            await updateHorario(id_agenda, {
                hora_abertura: novo.inicio,
                hora_fechamento: novo.fim,
                status_agenda: novo.status ? 1 : 0,
            });
            setHorarios((prev) =>
                prev.map((h) =>
                    h.id_agenda === id_agenda
                        ? { ...h, hora_abertura: novo.inicio, hora_fechamento: novo.fim, status_agenda: novo.status ? 1 : 0 }
                        : h
                )
            );
        } catch (err) {
            console.error('Erro ao salvar horário:', err);
        }
    };

    const icon = ()=>{
           if(id === 'Clientes'){
            return <FaUserFriends />
        }
        if(id === 'Horarios'){
            return <FaClock />
        }
        if(id === 'Produtos'){
            return <FaCartPlus />
        }
    }

    const card = ()=>{
        if(id === 'Clientes'){
            return cliente.map((c, index) => (
                 <CardCLiente key={c.id_cliente} nome={c.nome_cliente} status={c.status} email={c.email_cliente} telefone={c.telefone_cliente} cadastro={c.data_cadastro} id={c.id_cliente}/>
                ))
        }
          if (id === 'Horarios') {
            if(horarios.length === 0){
                return <p>Carregando horários...</p>
            }
    return horarios.map((d, index) => {
        
        return (
            <CardHorario
                key={d.id_agenda || index}
                dia={d.dia_semana}
                id_agenda={d.id_agenda}
                inicio={d.hora_abertura || '09:00'}
                fim={d.hora_fechamento || '18:00'}
                status={d.status_agenda === 1 }
                onSave={(novo) => {
                    if (d.id_agenda) handleSaveHorario(d.id_agenda, novo);
                }}
            />
        );
    });
}
        if(id === 'Produtos'){
            return infoProduct.map((p)=>{
               return(
                <CardProduto key={p.id_produto} name={p.nome_produto} description={p.descricao_produto} category={p.categoria_produto} price={p.preco_produto} quantity={p.estoque_produto} status={p.status_produto} id={p.id_produto}/>)
            })
        }
    }
    return (
         <div className={styles.containerContent}>

               
                <div className={styles.container}>

                    <div className={styles.topBox}>
                    <span className={styles.titleContainer}>
                        <span>
                            {icon()}
                        </span>
                        {titleContainer}
                    </span>
                    <p>{description}</p>
                    </div>
                    <div className={styles.containerCardArea}>
                        {card()}
                    </div>
                </div>
            </div>
    )
}
export default ContainerSection