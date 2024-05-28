import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export default function StreakView () {

    return (
        <section className='streak-view'>
            <h3>3 day streak</h3>
            <section class="datepicker">
                <section class="datepicker-top">
                <div class="month-selector">
                    <ArrowBackIosNewRoundedIcon />
                    <span class="month-name">Maj</span>
                    <ArrowForwardIosRoundedIcon />
                </div>
                </section>
                <section class="datepicker-calendar">
                    <span class="day">Mo</span>
                    <span class="day">Tu</span>
                    <span class="day">We</span>
                    <span class="day">Th</span>
                    <span class="day">Fr</span>
                    <span class="day">Sa</span>
                    <span class="day">Su</span>
                    <p class="date faded">29</p>
                    <p class="date faded">30</p>
                    <p class="date">1</p>
                    <p class="date">2</p>
                    <p class="date">3</p>
                    <p class="date">4</p>
                    <p class="date">5</p>
                    <p class="date">6</p>
                    <p class="date">7</p>
                    <p class="date">8</p>
                    <p class="date">9</p>
                    <p class="date">10</p>
                    <p class="date">11</p>
                    <p class="date">12</p>
                    <p class="date">13</p>
                    <p class="date">14</p>
                    <p class="date">15</p>
                    <p class="date">16</p>
                    <p class="date">17</p>
                    <p class="date">18</p>
                    <p class="date">19</p>
                    <p class="date">20</p>
                    <p class="date">21</p>
                    <p class="date">22</p>
                    <p class="date">23</p>
                    <p class="date">24</p>
                    <p class="date">25</p>
                    <p class="date">26</p>
                    <p class="date streak-day">27</p>
                    <p class="date streak-day">28</p>
                    <p class="date streak-day">29</p>
                    <p class="date">30</p>
                    <p class="date">31</p>
                    <p class="date faded">1</p>
                    <p class="date faded">2</p>
                </section>
            </section>
            <a className='btn-prime'>Set goal</a>
        </section>
    )
}