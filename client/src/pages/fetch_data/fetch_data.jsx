import React, {useState} from 'react'
import axios from 'axios';

const Fetch_data = () => {
    const [page, setPage] = useState(1)
    const [cycle, setCycle] = useState(2020)
    const [data, setData] = useState([])
    const [metaData, setMetaData] = useState({})
    const search = () => {
        axios.get(`https://api.open.fec.gov/v1/schedules/schedule_e/by_candidate/?sort_hide_null=false&page=${page}&sort_nulls_last=false&api_key=BN4TctiJaSOWRdDbbUGCxjllVnc6G7lBJZSwj7qy&election_full=true&per_page=100&sort_null_only=false&cycle=${cycle}&office=president`)
    .then(res => {
        console.log(res.data.results)
        console.log(res.data.pagination)
        setData(res.data.results)
        setMetaData(res.data.pagination)
    })
    }
    return(
        <>
            <label htmlFor="cycle">Cycle</label>
            <input id="cycle" onChange={e => setCycle(e.target.value)}></input>
            <label htmlFor="page">Page</label>
            <input id="page" onChange={e => setPage(e.target.value)}></input>
            <button onClick={search}>Query FEC</button>
            <table>
                <thead>
                    <tr>
                        <th>count</th>
                        <th>page</th>
                        <th>pages</th>
                        <th>per_page</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{metaData.count}</td>
                        <td>{metaData.page}</td>
                        <td>{metaData.pages}</td>
                        <td>{metaData.per_page}</td>
                    </tr>
                </tbody>

            </table>
            <table>
                <thead>

                    <tr>
                        <th>committee_name</th>
                        <th>total</th>
                        <th>count</th>
                        <th>candidate_name</th>
                        <th>cycle</th>
                        <th>committee_id</th>
                        <th>candidate_id</th>
                        <th>support_oppose_indicator</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map(expenditure => 
                        <tr key={Math.random()}>
                            <td>{expenditure.committee_name}</td>
                            <td>{expenditure.total}</td>
                            <td>{expenditure.count}</td>
                            <td>{expenditure.candidate_name}</td>
                            <td>{expenditure.cycle}</td>
                            <td>{expenditure.committee_id}</td>
                            <td>{expenditure.candidate_id}</td>
                            <td>{expenditure.support_oppose_indicator}</td>
                        </tr>
                    )}
            </tbody>
            </table>
        </>
    )
}


export default Fetch_data