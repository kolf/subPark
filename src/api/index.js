
import axios from 'axios'
import qs from 'qs'
const { API_ROOT } = process.env

export default {
    // /web/read/ours/introduction/info
    getIntroduction() {
        return axios.post(API_ROOT + 'read/ours/introduction/info')
    },
    getFriend() {
        return axios.post(API_ROOT + 'read/ours/friend/list')
    },
    getContact() {
        return axios.post(API_ROOT + 'read/ours/contact/list')
    },
    queryNews(pgaeNum) {
        return axios.post(API_ROOT + 'read/ours/news', qs.stringify({
            pager: pgaeNum
        }))
    },
    getNews(id) {
        return axios.post(API_ROOT + 'read/ours/news/info', qs.stringify({
            newsId: id
        }))
    },
    queryJobs() {
        return axios.post(API_ROOT + 'read/ours/jobs')
    },
    queryCooperations() {
        return axios.post(API_ROOT + 'read/ours/cooperations')
    },
    getInfirmarys() {
        return axios.post(API_ROOT + 'read/service/infirmarys')
    },
    getPeripherys() {
        return axios.post(API_ROOT + 'read/service/peripherys')
    },
    getLosts() {
        return axios.post(API_ROOT + 'read/service/losts')
    },
    // setAdvice() {
    //     return axios.post(API_ROOT + 'write/service/advice')
    // },
    setHelp(name, form) {
        if (name === 'help') {
            form.helpContent = form.content
        } else if (name === 'advice') {
            form.adviceContent = form.content
        }
        return axios.post(API_ROOT + 'write/service/' + name, qs.stringify(form))
    },
    getTels() {
        return axios.post(API_ROOT + 'read/service/tels')
    },
    getNotices() {
        return axios.post(API_ROOT + 'read/service/notices')
    },
    getLocations() {
        return axios.post(API_ROOT + 'read/service/locations')
    },
    queryActivity(pageNum, activityType) {
        return axios.post(API_ROOT + 'read/activity/news', qs.stringify({
            pager: pageNum,
            activityType
        }))
    },
    getActivity(id) {
        return axios.post(API_ROOT + 'read/activity/news/info', qs.stringify({
            activityId: id
        }))
    },
    queryBookingOther(pageNum) {
        return axios.post(API_ROOT + 'read/booking/others', qs.stringify({
            pager: pageNum
        }))
    },
    queryBookingSite(pageNum) {
        return axios.post(API_ROOT + 'read/booking/sites', qs.stringify({
            pager: pageNum
        }))
    },
    queryFacilitys(pageNum){
        // facilitys
        return axios.post(API_ROOT + 'read/booking/amusement/facilitys', qs.stringify({
            pager: pageNum
        }))
    },
    queryFacilityPackage(pageNum){
        return axios.post(API_ROOT + 'read/booking/amusement/facility/packages', qs.stringify({
            pager: pageNum
        }))
    },
    queryBanner(){
        return axios.post(API_ROOT + 'read/home/banners')
    },
    queryHomeProject(){
        return axios.post(API_ROOT + 'read/home/activity/news')
    }
}