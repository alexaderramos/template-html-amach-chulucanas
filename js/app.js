

// SideNav Initialization

$(document).ready(function () {
    $(".button-collapse").sideNav();
    new WOW().init();


    var el = document.querySelector('.custom-scrollbar');
    var ps = new PerfectScrollbar(el);
    $('[data-toggle="tooltip"]').tooltip();
    $('.mdb-select').materialSelect();
    $('.select-wrapper.md-form.md-outline input.select-dropdown').bind('focus blur', function () {
        $(this).closest('.select-outline').find('label').toggleClass('active');
        $(this).closest('.select-outline').find('.caret').toggleClass('active');
    });



    $('.delete-product').click(function (e) {
        swal({
            title: "Estas seguro?",
            text: "Se eliminara el producto de los registros!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Si, eliminar!",
            closeOnConfirm: false
        },
            function () {
                swal("Eliminado!", "Se elimino el producto.", "success");
            }
        );



    });
    $('.delete-client').click(function (e) {
        swal({
            title: "Estas seguro?",
            text: "Se eliminara el cliente de los registros!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Si, eliminar!",
            closeOnConfirm: false
        },
            function () {
                swal("Eliminado!", "Se elimino el cliente.", "success");
            }
        );



    });
    $('.delete-pedido').click(function (e) {
        // var ok=false;
        // var s =swal({
        //     title: "Estas seguro?",
        //     text: "Se eliminara el pedido de los registros!",
        //     type: "warning",
        //     showCancelButton: true,
        //     confirmButtonClass: "btn-danger",
        //     confirmButtonText: "Si, eliminar!",
        //     closeOnConfirm: false
        // },
        //     function () {

        //         swal("Eliminado!", "Se elimino el pedido.", "success");

        //     }
        // );

        // console.log(s);
        $(this).parent().parent().remove();

        swal(
            {
                title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {
                if (isConfirm) {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");



                } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            }
        );








    });

});

// Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);


})();

$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

// $('#exampleModalLongSC').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('whatever') // Extract info from data-* attributes
//     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     modal.find('.modal-title').text('New message to ' + recipient)
//     modal.find('.modal-body input').val(recipient)
// })


$('.ver-producto , .ver-cliente, .ver-pedido').click(function (e) {
    $('#exampleModalPreview').modal('show')
});

$('.edit-detail').click(function (e) {
    e.preventDefault();

    // var btn= '<a  class=btn-floating btn-sm btn-primary save-detail"'+
    //     'data-toggle="tooltip" data-placement="top" title="Guardar">'+
    //     '<i class="far fa-edit"></i></a>';
    var subt = $(this).parent().parent().find('#subt');
    var pre = $(this).parent().parent().find('#pre').text();

    var td = $(this).parent().parent().find('#cant');

    if ((td.find('input[name=cant]').val()) == undefined) {
        var cant = td.text();
        console.log(cant);

        td.html('<input type="number" class="form-control form-control-sm mx-auto" name="cant" value="' + cant + '" style="width:80px">');
        subt.text(0);
        $(this).removeClass('btn-warning edit-detail')
            .addClass('btn-primary save-detail')
            .attr('data-original-title', 'Guardar')
            .find('.far').removeClass('far fa-edit').addClass('fas fa-save');
    } else {
        var cant = td.find('input[name=cant]').val()
        if (cant > 0 && (pre != undefined && pre > 0)) {

            td.html(cant);
            subt.text(cant * pre);

            $(this).removeClass('btn-primary save-detail btn-warning edit-detail')
                .addClass('btn-warning edit-detail')
                .attr('data-original-title', 'Editar')
                .find('.fas').removeClass('fas fa-save').addClass('far fa-edit ');
        }
    }





    return false;


});

$('.save-detail').click(function (e) {
    e.preventDefault();
    console.log('guardar');
    // var btn_save='<button href="#!" class="btn-floating btn-sm btn-warning save-detail"'+
    // 'data-toggle="tooltip" data-placement="top" title="Guardar">'+
    // '<i class="far fa-edit"></i></button>';

    var td = $(this).parent().parent().find('#cant');
    var cant = td.find('input[name=cant]').val();
    // var cant = td.text();

    td.html(cant);

    var subt = $(this).parent().parent().find('#subt');


    $(this).removeClass('btn-primary save-detail btn-warning edit-detail')
        .addClass('btn-warning edit-detail')
        .attr('data-original-title', 'Editar')
        .find('.far').removeClass('fas fa-save').addClass('far fa-edit ');


    return false;


});

$('.edit-detail').blur(function (e) {
    var td = $(this).parent().parent().find('#cant');
    var cant = td.find('input[name=cant]').val();
    td.html(cant);
});