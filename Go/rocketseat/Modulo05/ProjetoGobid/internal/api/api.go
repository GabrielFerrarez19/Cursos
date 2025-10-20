package api

import (
	"ProjetoGobid/internal/services"

	"github.com/alexedwards/scs/v2"
	"github.com/go-chi/chi/v5"
)

type Api struct {
	Router       *chi.Mux
	UserServices services.UserServices
	Sessions     *scs.SessionManager
}
