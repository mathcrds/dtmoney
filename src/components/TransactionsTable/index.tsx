import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

/* interface ITransaction {
        id: number
        title: string
        amount: number
        type: string
        category: string
        createdAt: Date
} */

export function TransactionsTable () {
   
    useEffect (() => {  
        api.get('transactions')
        .then(response => console.log(response.data))
        }, []);

    return (
        <Container>
            
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    
                    {/* { transactions.map(cleitin  => 
                    <tr key={cleitin.id}>
                        <td>{cleitin.title}</td>
                        <td className="deposit">{cleitin.amount}</td>
                        <td>{ cleitin.category } </td>
                        <td>20/02/2021</td>
                    </tr>
                    ) } */}

                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.100</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}