import config from 'devextreme/core/config'
import dxDataGrid from 'devextreme/ui/data_grid'
import dxTextBox from 'devextreme/ui/text_box'
import dxForm from 'devextreme/ui/form'
import deMessages from 'devextreme/localization/messages/es.json'

import { loadMessages, locale } from 'devextreme/localization'

const load = () => {
  config({
    editorStylingMode: 'outlined',
    defaultCurrency: 'COP',
    defaultDateType: 'date',
    defaultUseCurrencyAccountingStyle: true
  })

  dxDataGrid.defaultOptions({
    device: () => true,
    options: {
      showRowLines: true,
      showColumnLines: true,
      remoteOperations: { groupPaging: true },
      showBorders: true,
      showColumnHeaders: true,
      columnHidingEnabled: false,
      loadPanel: {
        enabled: true,
        showIndicator: true,
        showPane: true,
        text: 'Un momento por favor.'
      },
      allowColumnResizing: true,
      highlightChanges: false,
      repaintChangesOnly: false,
      activeStateEnabled: false,
      cellHintEnabled: false,
      autoNavigateToFocusedRow: false,
      hoverStateEnabled: false,
      searchPanel: {
        visible: true,
        placeholder: 'Buscar algo...'
      },
      editing: {
        mode: 'cell',
        useIcons: true,
        confirmDelete: false,
        editColumnName: true,
        allowUpdating: true,
        allowDeleting: true,
        allowAdding: true,
        texts: {
          addRow: 'Añadir',
          cancelAllChanges: 'Cancelar',
          cancelRowChanges: 'Cancelar',
          confirmDeleteMessage: '¿Está seguro de que desea eliminar este registro?',
          deleteRow: 'Eliminar',
          editRow: 'Editar',
          saveAllChanges: 'Guardar',
          saveRowChanges: 'Guardar',
          undeleteRow: 'Deshacer eliminación',
          validationCancelChanges: 'Cancelar'
        }
      },
      grouping: {
        autoExpandAll: false,
        contextMenuEnabled: true,
        texts: {
          groupByThisColumn: 'Agrupar por esta columna',
          groupContinuedMessage: 'Continuación de la página anterior',
          groupContinuesMessage: 'Continuación en la página siguiente',
          ungroup: 'Desagrupar',
          ungroupAll: 'Desagrupar todo'
        }
      },
      groupPanel: {
        visible: true,
        emptyPanelText: 'Arrastra una columna aquí para agrupar por ella'
      },
      sorting: {
        mode: 'multiple',
        ascendingText: 'Ascendente',
        clearText: 'Limpiar',
        descendingText: 'Descendente'
      },
      paging: {
        pageSize: 10,
        enabled: true
      },
      pager: {
        displayMode: 'compact',
        showInfo: true,
        showNavigationButtons: true,
        showPageSizeSelector: true,
        visible: true,
        allowedPageSizes: 'auto'
      },
      columnAutoWidth: true,
      wordWrapEnabled: false,
      allowColumnReordering: true,
      columnResizingMode: 'widget',
      columnChooser: {
        enabled: true,
        allowSearch: true,
        mode: 'select',
        title: 'Selecciona las columnas',
        emptyPanelText: 'No hay columnas que mostrar',
        searchTimeout: 0
      },
      export: {
        enabled: true,
        formats: ['xlsx'],
        // allowExportSelectedData: true,
        fileName: 'Reporte',
        texts: {
          exportAll: 'Exportar todo',
          exportSelectedRows: 'Exportar filas seleccionadas',
          exportTo: 'Exportar a'
        }
      },
      noDataText: '¡Nada por aqui!'
    }
  })

  dxTextBox.defaultOptions({
    device: () => true,
    options: {
      labelMode: 'floating'
    }
  })

  dxForm.defaultOptions({
    device: () => true,
    options: {
      labelLocation: 'top',
      labelMode: 'floating'
    }
  })

  loadMessages(deMessages)
  locale('es-CO')
}

export default load
