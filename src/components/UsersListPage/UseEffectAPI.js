/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import './usersListPage.css';
import { FaGithub } from 'react-icons/fa';

const UseEffectAPI = () => {
  return (
    <div>
      <h1>
        <FaGithub />
        Github Users
      </h1>
      <div className='container-fluid mt-5'>
        <div className='row text-center'>
          <div className='col-10 col md-4 mt-5'>
            <div class='card p-2'>
              <div class='d-flex align-items-center'>
                <div class='image'>
                  <img class='rounded' width='155'></img>{' '}
                  {/* img src={avatar_url} is for Avatar injection*/}
                  <div class='ml-3 w-100'>
                    <h4 className='mb-0 mt-0 textLeft'>Aneta</h4>{' '}
                    {/*h4 is for username/login injection*/}
                    <span className='textLeft'>Maybe Metapack</span>
                    <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'></div>
                    <div className='d-flex flex-column'>
                      <span className='number1'>id</span>{' '}
                      {/*here will be id injection*/}
                    </div>
                    <div className='d-flex flex-column'>
                      <span className='number2'>Team</span>{' '}
                      {/*here will be budge inserted*/}
                    </div>
                    <div className='d-flex flex-column'>
                      <span className='number3'>Link</span>{' '}
                      {/*here will be button to users profile repos_url*/}
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-10 col md-4 mt-5'>
                <div class='card p-2'>
                  <div class='d-flex align-items-center'>
                    <div class='image'>
                      <img class='rounded' width='155'></img>{' '}
                      {/* img src={avatar_url} is for Avatar injection*/}
                      <div class='ml-3 w-100'>
                        <h4 className='mb-0 mt-0 textLeft'>Aneta</h4>{' '}
                        {/*h4 is for username/login injection*/}
                        <span className='textLeft'>Maybe Metapack</span>
                        <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'></div>
                        <div className='d-flex flex-column'>
                          <span className='number1'>id</span>{' '}
                          {/*here will be id injection*/}
                        </div>
                        <div className='d-flex flex-column'>
                          <span className='number2'>Team</span>{' '}
                          {/*here will be budge inserted*/}
                        </div>
                        <div className='d-flex flex-column'>
                          <span className='number3'>Link</span>{' '}
                          {/*here will be button to users profile repos_url*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-10 col md-4 mt-5'>
                <div class='card p-2'>
                  <div class='d-flex align-items-center'>
                    <div class='image'>
                      <img class='rounded' width='155'></img>{' '}
                      {/* img src={avatar_url} is for Avatar injection*/}
                      <div class='ml-3 w-100'>
                        <h4 className='mb-0 mt-0 textLeft'>Aneta</h4>{' '}
                        {/*h4 is for username/login injection*/}
                        <span className='textLeft'>Maybe Metapack</span>
                        <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'></div>
                        <div className='d-flex flex-column'>
                          <span className='number1'>id</span>{' '}
                          {/*here will be id injection*/}
                        </div>
                        <div className='d-flex flex-column'>
                          <span className='number2'>Tram</span>{' '}
                          {/*here will be budge inserted*/}
                        </div>
                        <div className='d-flex flex-column'>
                          <span className='number3'>Link</span>{' '}
                          {/*here will be button to users profile repos_url*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UseEffectAPI;
