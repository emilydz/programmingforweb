var baseURL = 'https://core.ac.uk';

Vue.component('research-app', {
    template: `<div class="paper">
        <div class="paper-box">
            <p class="paper-box__item-title">{{paper.title}}</p>
            <div class="paper-box__item-sub">
                <p>{{paper.authors}}</p>
                <a v-bind:href="paper.downloadUrl">Download</a>
            </div>
        </div>
        <p class="body">{{paper.description}}</p>
    </div>`,
    props: ['paper']
});

const vm = new Vue ({
    el: '#myApp',
    data: {
        papers: [],
        authors: []
    },
    mounted: function () {
        axios.get(baseURL + ':443/api-v2/articles/search/title?page=1&pageSize=10&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=lpAaYsE9nqh5Hy1WNkRgzocB2GUD7wOt').then((response) => {
                console.log('response', response);
                vm.papers = response.data.data;
                vm.authors = response.data.data.authors;
                console.log(response.data.data);
                console.log(response.data.data.authors);
            });
    }
})