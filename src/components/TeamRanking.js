import React from 'react';
import { teams } from '../data/teams';

function TeamRanking() {
  const sortedTeams = [...teams].sort((a, b) => a.ranking - b.ranking);

  return React.createElement('div', { style: { padding: '20px' } },
    React.createElement('h1', null, 'Ranking Drużyn - Top 30'),
    React.createElement('div', { style: { background: 'white', borderRadius: '10px', padding: '20px' } },
      sortedTeams.map(team => 
        React.createElement('div', { 
          key: team.id,
          style: { 
            display: 'flex', 
            justifyContent: 'space-between',
            padding: '10px',
            borderBottom: '1px solid #eee'
          }
        },
          React.createElement('span', null, `#${team.ranking} ${team.name}`),
          React.createElement('span', null, `${team.points} pts`),
          React.createElement('span', null, team.region)
        )
      )
    )
  );
}

export default TeamRanking;