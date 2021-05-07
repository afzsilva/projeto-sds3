import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { SalePage } from 'types/sale';
import { formatLocalDate } from 'utils/format';
import { BASE_URL } from 'utils/requests';

const DataTable = () => {

    const [page, setPage] = useState<SalePage>({

        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0,
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=0&size=20&sort=date,desc`)
            .then(response => {
                setPage(response.data);
            })
    }, []);

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <td>Data</td>
                        <td>Vendedor</td>
                        <td>Clientes Viditados</td>
                        <td>Negocios Fechados</td>
                        <td>Valor</td>
                    </tr>
                </thead>
                <tbody>
                    {page.content?.map(item =>
                        <tr key={item.id}>
                            <th>{formatLocalDate(item.date, "dd/MM/yyyy")}</th>
                            <th>{item.seller.nome}</th>
                            <th>{item.visited}</th>
                            <th>{item.deals}</th>
                            <th>{item.amount.toFixed(2)}</th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
