
export default function MemberProfile({member, onClick}) {

    return (
      <section className="member-row" onClick={() => onClick(member)}>
          <div className="user">
            <img src={member.avatar}/>
            <p className='txtsmallbold'>{member.name}</p>
          </div>
          <p className='txtsmall memb-prog'>{member.progress}</p>
          <div className="learning">
            <img src={member.learning}/>
          </div>
          <p className='txtsmall memb-active'>{member.activity}</p>
      </section>
    )
  }