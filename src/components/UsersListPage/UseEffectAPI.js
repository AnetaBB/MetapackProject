/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import './usersListPage.css';
import { FaGithub } from 'react-icons/fa';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react';

const UseEffectAPI = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    // eslint-disable-next-line no-undef
    const response = await fetch('https://api.github.com/users');
    setUsers(await response.json());
  };
  // eslint-disable-next-line no-undef
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>
        <FaGithub />
        Github Users
      </h1>
      <div className='container-fluid mt-5'>
        <div className='row text-center'>
          {users.map((curElem) => {
            const { avatar_url, id, login, repos_url } = curElem;
            return (
              <div className='col-10 col md-4 mt-5'>
                <div class='card p-2'>
                  <div class='d-flex align-items-center'>
                    <div class='image'>
                      <img
                        src={avatar_url}
                        className='rounded'
                        width='155'
                      ></img>{' '}
                      {/* img src={avatar_url} is for Avatar injection*/}
                      <div class='ml-3 w-100'>
                        <h4 className='mb-0 mt-0 textLeft'>@{curElem.login}</h4>{' '}
                        {/*h4 is for username/login injection*/}
                        <div className='d-flex flex-column'>
                          <span className='number1'>ID:#{id}</span>{' '}
                          {/*here will be id injection*/}
                        </div>
                        <div className='d-flex flex-column'>
                          <span className='number2'>Team</span>{' '}
                          {/*here will be budge inserted*/}
                        </div>
                        <div className='d-flex flex-column'>
                          <span className='number3'>
                            <FaGithub />
                            GitHub page
                          </span>{' '}
                          {/*here will be button to users profile repos_url*/}
                          <div className='d-flex flex-column'>
                            <span className='number2'>Details</span>{' '}
                            {/*here will be details link*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default UseEffectAPI;
