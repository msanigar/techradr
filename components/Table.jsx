import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import jsondata from '../data/data.json';

const Technology = ({ technology, handleChange }) => {
  const values = ['meh', 'hold', 'assess', 'trial', 'adopt'];
  return (
    <tr>
      <th>{technology}</th>
      {values.map((i, k) => {
        return (
          <td key={k}>
            <input
              type="radio"
              name={technology}
              value={i}
              className="radio"
              onChange={handleChange}
            />
          </td>
        );
      })}
    </tr>
  );
};

const Layout = ({ Techs, name }) => {
  const [techState, changeTechState] = useState(null);
  const handleTechChange = (e) => {
    console.log(e);
    changeTechState({ ...techState, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(techState);
  }, [techState]);

  return (
    <>
      <div className="overflow-x-auto max-w-7xl my-6 mx-auto">
        <form>
          <table className="tech-table table table-fixed table-compact w-full">
            <thead>
              <tr>
                <th>{name}</th>
                <th>Meh</th>
                <th>Hold</th>
                <th>Assess</th>
                <th>Trial</th>
                <th>Adopt</th>
              </tr>
            </thead>
            <tbody>
              {Techs.map((i, k) => {
                return (
                  <Technology
                    key={k}
                    technology={i}
                    handleChange={handleTechChange}
                  />
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

const Table = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const fetchData = () => {
    axios.get('/.netlify/functions/getData').then((res) => {
      setData(res.data[0]);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="alert alert-info shadow-lg my-4 mx-auto w-1/2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          {data ? <span>MongoDB is connected!</span> : null} <br></br>
          {user ? (
            <span>
              hey, {user.email} (id: {user.email})
            </span>
          ) : null}
        </div>
      </div>
      {Object.entries(jsondata).map(([key, value], i) => (
        <Layout name={key} key={i} Techs={value} />
      ))}

      <div className="divider"></div>

      <div className="flex flex-col w-full border-opacity-50">
        <button className="btn btn-secondary w-28 m-auto">Submit</button>
      </div>

      <div className="divider"></div>
    </>
  );
};

export default Table;
