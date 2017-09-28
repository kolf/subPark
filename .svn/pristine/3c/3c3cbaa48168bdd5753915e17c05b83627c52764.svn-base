<template>
    <div id="vcom-calendar" class="vcom-calendar">
        <div class="header">
            <div class="head">
                {{ year }} - {{ month }} - {{ currentDay }}
            </div>
            <div class="weeks">
                <span v-for="(week, index) in weeks" class="week">
                    {{ week }}
                </span>
            </div>
        </div>
        <div class="days">
            <span class="day" v-for="(day, index) in days">
                <span v-if="day.isToday" class="today">
                    {{ day.day }}
                </span>
                <span v-if="day.isPreMonth || day.isNextMonth" class="not-this-month">
                    {{ day.day }}
                </span>
                <span v-if="day.isThisMonthDay && !day.isToday" class="this-month-day">
                    {{ day.day }}
                </span>
            </span>
        </div>
        <!-- <div class="input-group">
                      <select name="year" id="year">
                        <option value="{{ year }}" v-for="year in selectYears">{{ year }}</option>
                      </select>
                      <select name="month" id="month">
                        <option value="{{ month }}" v-for="month in selectMonths">{{ month }}</option>
                      </select>
                    </div> -->
    </div>
</template>

<script>
// 可以调整日历矩阵大小
const MATRIX_MAX = 7 * 6, WEEKS = ['日', '一', '二', '三', '四', '五', '六'], bMonthRe = /^1?$|3|5|7|8|10|12/;
export default {
    data() {
        return {
            'time': new Date(),
            'weeks': WEEKS
        }
    },
    computed: {
        isRunYear() {
            return ((this.year % 4 === 0) && (this.year % 100 !== 0));
        },
        selectYears() {
            return this._getRangeList(2099, 1900);
        },
        selectMonths() {
            return this._getRangeList(12);
        },
        dayData() {
            return [
                this.year,
                this.month,
                this.currentDay
            ].join('-');
        },
        firstDayWeek() {
            return new Date(
                this.year
                , this.month - 1
                , 1
            )
                .getDay();
        },
        year() {
            return this.time.getFullYear()
        },
        month() {
            return this.time.getMonth() + 1
        },
        days() {
            return this.getDaysList();
        },
        currentDay() {
            return this.time.getDate();
        }
    },
    events: {
    },
    methods: {
        _getPreMonthDays(month, offset) {
            if (offset === 0) {
                return [];
            } else if (month === 1) {
                return this.getDays(12).slice(-offset);
            } else {
                return this.getDays(month - 1).slice(-offset);
            }
        },
        _getNextMonthDays(month, offset) {
            if (month === 12) {
                return this.getDays(1).slice(0, offset);
            } else {
                return this.getDays(month + 1).slice(0, offset);
            }
        },
        _getRangeList(range, start) {
            var i = start || 1, _list = [];
            for (; i <= range; i++) {
                _list.push(i);
            }
            return _list;
        },
        getDays(month) {
            if (bMonthRe.test(month)) {
                return this._getRangeList(31);
            } else if (month === 2) {
                if (this.isRunYear) {
                    return this._getRangeList(29);
                } else {
                    return this._getRangeList(28);
                }
            } else {
                return this._getRangeList(30);
            }
        },
        getDaysList() {
            let _needConcatLength = this.getDays(this.month).length + this.firstDayWeek;
            // debugger;
            let _initList = this._getPreMonthDays(this.month, this.firstDayWeek)
                .map((preMonthday) => {
                    return {
                        'year': this.month === 1 ? this.year - 1 : this.year,
                        'month': this.month === 1 ? 12 : this.month - 1,
                        'day': preMonthday,
                        'isPreMonth': true
                    };
                });
            if (MATRIX_MAX <= _needConcatLength) {
                // 如果日历矩阵长度小于_needConcatLength
                let _thisMonthDaysList = this.getDays(this.month).slice(
                    0
                    , this.getDays(this.month).length - (_needConcatLength - MATRIX_MAX)
                )
                return _initList
                    .concat(_thisMonthDaysList.map((day) => {
                        let _dateObj = {
                            'year': this.year,
                            'month': this.month,
                            'isThisMonthDay': true,
                            'day': day
                        };
                        if (day === this.currentDay) {
                            _dateObj.isToday = true;
                        }
                        return _dateObj;
                    }));
            } else {
                return _initList
                    .concat(this.getDays(this.month).map((day) => {
                        let _dateObj = {
                            'year': this.year,
                            'month': this.month,
                            'isThisMonthDay': true,
                            'day': day
                        };
                        if (day === this.currentDay) {
                            _dateObj.isToday = true;
                        }
                        return _dateObj;
                    }))
                    .concat(
                    this._getNextMonthDays(
                        this.month
                        , MATRIX_MAX - _needConcatLength
                    ).map((nextMonthDay) => {
                        return {
                            'year': this.month === 12 ? this.year + 1 : this.year,
                            'month': this.month === 12 ? 1 : this.month + 1,
                            'day': nextMonthDay,
                            'isNextMonth': true
                        };
                    })
                    )
            }
        }
    }
}
</script>
<style scoped lang="scss">
.vcom-calendar {
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 2px;
    border: 1px solid #eee;
    padding: 5%
}

.vcom-calendar .header {
    width: 100%;
    padding: 10px 0;
}

.vcom-calendar .head {
    text-align: right;
    padding-bottom: 20px;
    font-size: 30px;
}

.vcom-calendar .weeks {
    color: #fff;
    background: #999;
    overflow: hidden;
    text-align: center;
}

.vcom-calendar .weeks .week {
    width: 14.28571%;
    display: block;
    float: left;
    font-size: 16px;
    padding: 4px 0;
    &:last-child,&:first-child{
        background-color: #333;
    }
}

.vcom-calendar .days {
    overflow: hidden;
    position: relative;
}

.vcom-calendar .days .day span {
    width: 14.28571%;
    display: block;
    float: left;
    height: 50px;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
}

.vcom-calendar .days .day .this-month-day:hover {
    background-color: #e1e1e1;
    cursor: pointer;
    color: #ffffff;
}

.vcom-calendar .days .day .today {
    border-bottom: 3px solid #2ecc71;
    color: #2ecc71;
}

.vcom-calendar .days .day .not-this-month {
    background-color: #f9f9f9;
    color: #999999;
}

.vcom-calendar .input-group {
    background-color: #f9f9f9;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.vcom-calendar .input-group select {}
</style>
