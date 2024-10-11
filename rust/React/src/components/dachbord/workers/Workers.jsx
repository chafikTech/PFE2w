import React, { useState } from "react";
import { waiters } from "./waiter";
import { chefs } from "./chef";
import WorkerModal from "./WorkerModal";
import "./Workers.css";

const Workers = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);

  const handleWorkerClick = (worker) => {
    setSelectedWorker(worker);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedWorker(null);
  };

  return (
    <div className="worker-container">
      <h1>Waiters</h1>
      <div className="waiter-container">
        {waiters.map((waiter) => (
          <div className="center" key={waiter.id} onClick={() => handleWorkerClick(waiter)}>
            <div className="article-card">
              <div className="content">
                <p className="date">{waiter.firstName}</p>
                <p className="title">{waiter.lastName}</p>
              </div>
              <img src={waiter.profileImg} alt={`${waiter.firstName} ${waiter.lastName}`} />
            </div>
          </div>
        ))}
      </div>
      <h1>Chefs</h1>
      <div className="chef-container">
        {chefs.map((chef) => (
          <div className="center" key={chef.id} onClick={() => handleWorkerClick(chef)}>
            <div className="article-card">
              <div className="content">
                <p className="date">{chef.firstName}</p>
                <p className="title">{chef.lastName}</p>
              </div>
              <img src={chef.profileImg} alt={`${chef.firstName} ${chef.lastName}`} />
            </div>
          </div>
        ))}
      </div>

      <WorkerModal isVisible={isModalVisible} worker={selectedWorker} onClose={closeModal} />
    </div>
  );
};

export default Workers;

