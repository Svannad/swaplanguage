export default function StreakGoal() {

  return (
    <section className="goal-card">
        <h3>Set a streak goal</h3>
        <div className="goal-wrap">
          <div className="goal one">
            <p className="txtsmallbold">3 days</p>
            <p className="txtsmall">Getting started</p>
          </div>
          <div className="goal two">
            <p className="txtsmallbold"> 7 days</p>
            <p className="txtsmall">Good for beginners</p>
          </div>
          <div className="goal three">
            <p className="txtsmallbold">15 days</p>
            <p className="txtsmall">Building a habit</p>
          </div>
          <div className="goal four">
            <p className="txtsmallbold">30 days</p>
            <p className="txtsmall">Expert mode</p>
          </div>
        </div>
        <a className='btn-prime'>Set goal</a>
    </section>
  )
}