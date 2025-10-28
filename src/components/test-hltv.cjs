// test-hltv.cjs
const hltv = require('hltv-api');

const testHLTV = async () => {
  try {
    console.log('🔄 Testowanie HLTV API...');
    
    const ranking = await hltv.getTeamRanking();
    
    console.log('✅ TOP 10 drużyn:');
    ranking.slice(0, 10).forEach(team => {
      console.log(`#${team.rank} ${team.name}`);
    });
    
  } catch (error) {
    console.error('❌ Błąd HLTV API:', error);
    console.log('💡 Użyjemy ręcznych danych');
  }
};

testHLTV();