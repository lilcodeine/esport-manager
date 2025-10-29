import React from 'react';
import { teams } from '../data/teams';
import './TeamRanking.css';

function TeamRanking() {
  const sortedTeams = [...teams].sort((a, b) => a.ranking - b.ranking);

  return React.createElement('div', { className: 'team-ranking' },
    React.createElement('div', { className: 'ranking-header' },
      React.createElement('h1', null, 'Ranking Drużyn - Top 30'),
      React.createElement('div', { className: 'ranking-info' },
        React.createElement('span', { className: 'update-info' }, 
          `Aktualizacja: ${new Date().toLocaleDateString('pl-PL')}`
        )
      )
    ),
    React.createElement('div', { className: 'ranking-table-container' },
      React.createElement('table', { className: 'ranking-table' },
        React.createElement('thead', null,
          React.createElement('tr', null,
            React.createElement('th', { className: 'position-col' }, 'Pozycja'),
            React.createElement('th', { className: 'team-col' }, 'Drużyna'),
            React.createElement('th', { className: 'points-col' }, 'Punkty'),
            React.createElement('th', { className: 'region-col' }, 'Region'),
            React.createElement('th', { className: 'budget-col' }, 'Budżet'),
            React.createElement('th', { className: 'players-col' }, 'Zawodnicy')
          )
        ),
        React.createElement('tbody', null,
          sortedTeams.map(team => 
            React.createElement('tr', { key: team.id },
              React.createElement('td', { className: 'position-cell' },
                React.createElement('span', { className: 'position-badge' }, `#${team.ranking}`)
              ),
              React.createElement('td', null,
                React.createElement('div', { className: 'team-name' }, team.name),
                React.createElement('div', { className: 'team-details' }, `ID: ${team.id}`)
              ),
              React.createElement('td', { className: 'points-cell' }, team.points),
              React.createElement('td', null,
                React.createElement('span', { className: 'region-badge' }, team.region)
              ),
              React.createElement('td', { className: 'budget-cell' }, team.budget),
              React.createElement('td', { className: 'players-count' }, team.players.length)
            )
          )
        )
      )
    )
  );
}

export default TeamRanking;