import React from 'react';
import { teams } from '../data/teams'; // Import twoich danych
import './TeamRanking.css';

const TeamRanking = () => {
  // Używamy danych z teams.js - już posortowane według rankingu
  const teamRankingData = teams.sort((a, b) => a.ranking - b.ranking);

  const getTrendColor = (position, index) => {
    // Prosta logika trendu - możesz ją później ulepszyć
    if (position < index) return '#4CAF50'; // zielony - awans
    if (position > index) return '#F44336'; // czerwony - spadek
    return '#FF9800'; // pomarańczowy - bez zmian
  };

  const getTrendIcon = (position, index) => {
    if (position < index) return '↑';
    if (position > index) return '↓';
    return '→';
  };

  return (
    <div className="team-ranking">
      <div className="ranking-header">
        <h1>Ranking Drużyn - Top 30</h1>
        <div className="ranking-info">
          <span className="update-info">Aktualizacja: {new Date().toLocaleDateString('pl-PL')}</span>
        </div>
      </div>

      <div className="ranking-table-container">
        <table className="ranking-table">
          <thead>
            <tr>
              <th className="position-col">Pozycja</th>
              <th className="team-col">Drużyna</th>
              <th className="points-col">Punkty</th>
              <th className="region-col">Region</th>
              <th className="budget-col">Budżet</th>
              <th className="trend-col">Trend</th>
            </tr>
          </thead>
          <tbody>
            {teamRankingData.map((team, index) => (
              <tr key={team.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td className="position-cell">
                  <span className="position-badge">#{team.ranking}</span>
                </td>
                <td className="team-cell">
                  <div className="team-name">{team.name}</div>
                  <div className="team-players">{team.players.length} zawodników</div>
                </td>
                <td className="points-cell">{team.points}</td>
                <td className="region-cell">
                  <span className="region-badge">{team.region}</span>
                </td>
                <td className="budget-cell">{team.budget}</td>
                <td className="trend-cell">
                  <span 
                    className="trend-icon"
                    style={{ color: getTrendColor(team.ranking, index + 1) }}
                  >
                    {getTrendIcon(team.ranking, index + 1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="ranking-stats">
        <div className="stat-item">
          <span className="stat-number">{teams.length}</span>
          <span className="stat-label">Drużyn w rankingu</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{teams.reduce((acc, team) => acc + team.players.length, 0)}</span>
          <span className="stat-label">Zawodników</span>
        </div>
      </div>
    </div>
  );
};

export default TeamRanking;