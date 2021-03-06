@extends('admin.layouts.app')

@section('content')
    <div id="wrapper">
        @include('admin.layouts.nav')
        <div id="page-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 header-page">
                        <ol class="breadcrumb col-lg-6 col-md-6 col-sm-6">
                            <li><a href="/admin">首页</a></li>
                            <li><a href="/admin/friendly_links">链接</a></li>
                            <li class="active">列表</li>
                        </ol>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <table class="table">
                            <thead>
                            <tr>
                                <td class="text-center">ID</td>
                                <td class="text-center">链接描述</td>
                                <td class="text-center">链接地址</td>
                                <td class="text-center">创建时间</td>
                                <td class="text-center">操作</td>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($friendlyLinks as $friendlyLink)
                                <tr>
                                    <td class="text-center">{{ $friendlyLink->id }}</td>
                                    <td class="text-center">{{ $friendlyLink->description }}</td>
                                    <td class="text-center">{{ $friendlyLink->path }}</td>
                                    <td class="text-center">{{ $friendlyLink->created_at }}</td>
                                    <td class="text-center">
                                        <a class="btn btn-primary btn-xs" href="/admin/friendly_links/{{ $friendlyLink->id }}/edit"><i class="fa fa-edit fa-fw"></i>修改</a>
                                        <a class="btn btn-danger btn-xs btn-delete-link" data-id="{{ $friendlyLink->id }}"><i class="fa fa-remove fa-fw"></i>删除</a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        {{ $friendlyLinks->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('footer')
    <script>
        $('.btn-delete-link').click(function () {
            if (confirm('确认删除?')) {
                var obj = $(this);
                var id = obj.attr('data-id');
                $.ajax({
                    url: '/admin/friendly_links/' + id,
                    type: 'post',
                    data: {"_token": window.Laravel.csrfToken, '_method': 'DELETE'},
                    success: function (data) {
                        if (data.code === '10000') {
                            obj.parent().parent().remove();
                        }
                    }
                })
            }
        })
    </script>
@endsection